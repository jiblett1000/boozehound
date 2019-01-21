<template>
  <v-form>
    <v-container>
      <v-layout column>
        <v-flex>
          <v-subheader>Name</v-subheader>
          <v-text-field
            v-model="recipeName"
            required
            autofocus
            clearable
            box
            single-line/>
          <v-subheader>Ingredients</v-subheader>
          <v-list subheader>
            <v-list-tile 
              v-for="ingredient in recipe.ingredients" 
              :key="ingredient.name">
              <v-list-tile-action>
                <v-icon>drag_handle</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{ ingredient.name }}</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>clear</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider />
          </v-list>

          <v-subheader>Prep Methods</v-subheader>
          <v-select
            v-model="recipePrepMethods"
            :items="prepMethods"
            item-text="name"
            box
            multiple
            clearable
            single-line
          />

          <v-subheader>Drinkware</v-subheader>
          <v-select
            v-model="recipeDrinkware"
            :items="drinkware"
            item-text="name"
            box
            return-object
            clearable
            single-line
          />

          <v-subheader>Served</v-subheader>
          <v-select
            v-model="recipeServed"
            :items="servingMethods"
            item-text="name"
            clearable
            single-line
            box
          />

          <template v-if="recipe.ingredients">
            <v-subheader>Initial Volume</v-subheader>
            <v-text-field
              :value="initialVol.toFixed(decimalPlaceAcc)"
              :suffix="volumeUnits"
              readonly
              single-line
              box
            />

            <v-subheader>Initial ABV</v-subheader>
            <v-text-field
              :value="initialAbv.toFixed(decimalPlaceAcc)"
              suffix="%"
              readonly
              single-line
              box
            />

            <v-subheader>Dilution</v-subheader>
            <v-text-field
              :value="(dilution * 100).toFixed(decimalPlaceAcc)"
              suffix="%"
              label="Dilution"
              box
              single-line
              readonly
            />

            <v-subheader>Final Volume</v-subheader>
            <v-text-field
              :value="finalVol.toFixed(decimalPlaceAcc)"
              :suffix="volumeUnits"
              label="Final Volume"
              box
              single-line
              readonly
            />
            
            <v-subheader>Final ABV</v-subheader>
            <v-text-field
              :value="finalAbv.toFixed(decimalPlaceAcc)"
              suffix="%"
              label="Final ABV"
              box
              single-line
              readonly
            />

            <template v-if="recipe.drinkware">
              <v-subheader>% of Glass Filled</v-subheader>
              <v-text-field
                
                :value="glassFilled.toFixed(decimalPlaceAcc)"
                suffix="%"
                label="% of Glass Filled"
                box
                single-line
                readonly
              />
            </template>
          </template>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import { mapState } from 'vuex';
import convert from 'convert-units';

  export default {
    meta: {
      title: '',
      contextMenu: [
        { title: 'Sort' },
        { title: 'Group' },
        { title: 'Filter' },
        { title: 'Export' },
        { title: 'Settings' },
      ],
    },

    computed: {
      ...mapState('userSettings', ['decimalPlaceAcc']),
      ...mapState('userSettings', ['volumeUnits']),
      ...mapState('drinkware', ['drinkware']),
      ...mapState('recipes', ['recipe']),

      recipeName: {
        get() {
          return this.$store.state.recipes.recipe.name;
        },
        set(recipeName) {
          this.$store.dispatch('recipes/setName', recipeName)
        },
      },

      recipeDrinkware: {
        get() {
          return this.$store.state.recipes.recipe.drinkware;
        },
        set(recipeDrinkware) {
          this.$store.dispatch('recipes/setDrinkware', recipeDrinkware)
        },
      },

      initialVol() {
        const vol = this.recipe.ingredients.reduce((sum, ingredient) => {
          const unit = ingredient.unit;
          // declare 'amt' var and convert to common unit.
          const amt = convert(ingredient.amount).from(unit).to(this.volumeUnits);

          return sum + amt;
        }, 0);

        return vol;
      },

      ingredientsAbv() {
        const ingredientsAbv = this.recipe.ingredients.reduce((sum, ingredient) => {
          if (ingredient.abv) {
            const unit = ingredient.unit;
            const abv = ingredient.abv;
            const amt = convert(ingredient.amount).from(unit).to(this.volumeUnits);

            return sum + amt * abv;
          }
          return sum + 0;
        }, 0);

        return ingredientsAbv;
      },

      initialAbv() {
        return this.ingredientsAbv / this.initialVol;
      },

      dilution() {
        // Convert ABV from percent to decimal;
        const initialAbv = this.initialAbv / 100;

        const dilution = {
          'Stir': () => -1.21 * (initialAbv ** 2) + 1.246 * initialAbv + 0.145,
          'Stir on Big Rock': () => -1.21 * (initialAbv ** 2) + 1.246 * initialAbv + 0.145,
          'Shake': () => -1.567 * (initialAbv ** 2) + 1.742 * initialAbv + 0.203,
          'Short Shake': () => (-1.567 * (initialAbv ** 2) + 1.742 * initialAbv + 0.203) * 0.75,
          'Dirty Dump': () => -1.567 * (initialAbv ** 2) + 1.742 * initialAbv + 0.203,
          'Build': () => 0,
          'Dry Shake': () => 0,
          'Slushy': () => 0,
          'Muddle': () => 0,
          'Fine Strain': () => 0,
          'Swizzle': () => 0,
        };

        return this.recipe.prepMethods.reduce((sum, method) => sum + dilution[method](), 0);
      },

      finalVol() {
        return this.initialVol * this.dilution + this.initialVol;
      },

      finalAbv() {
        return this.ingredientsAbv / this.finalVol;
      },

      glassFilled() {
        const served = this.recipe.served;
        const capacity = this.recipe.drinkware.capacity;
        // Volumes of in ml
        const iceVols = {
          'On the Rocks': 23.984132,
          'On Collins Cube': 118.294,
          'On Crushed': capacity - this.finalVol,
          'On a Big Rock': 131.09647805253,
          'Neat': 0,
          'Slushy': 0,
          'Up': 0,
        };
        const iceVol = iceVols[served];
        const iceAmt = Math.floor(capacity / iceVol);
        const percent = ((this.finalVol + (iceAmt * iceVol)) / capacity);

        return percent * 100;
      },

    },
  }
</script>

<style lang="stylus" scoped>

.v-subheader {
  padding-left: 0;
}
</style>

