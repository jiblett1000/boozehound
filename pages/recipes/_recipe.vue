<template>
  <v-container>
    <v-layout>
      <nav-toolbar :page-title="title" />
      <v-flex>
        <v-form>
          <v-text-field
            v-model="recipeName"
            label="Name"
            required
            autofocus
            clearable
            box/>
          <v-subheader>Ingredients</v-subheader>
          <v-container class="pa-0">
            <v-input
              v-for="ingredient in recipe.ingredients"
              :key="ingredient.name"
              append-icon="close"
              prepend-icon="drag_handle"
              box
            >
              <v-layout
                row
                wrap>
                <v-flex 
                  xs2
                  d-inline-flex>
                  <v-text-field 
                    label="Amount"
                    type="number"
                    class="inputNumber"
                    single-line
                  />
                </v-flex>

                <v-flex 
                  xs2
                  d-inline-flex>
                  <v-select 
                    :items="ingredientUnits"
                    label="Unit"
                    single-line 
                  />
                </v-flex>

                <v-flex
                  xs8
                  d-inline-flex>
                  <v-text-field 
                    label="Ingredient"
                    single-line>
                    {{ ingredient.name }}
                  </v-text-field>
                </v-flex>
              </v-layout>
            </v-input>
            <v-layout>
              <v-flex>
                <v-btn
                  fab
                  right
                  outline
                  small
                  @click="addIngredient">
                  <v-icon>add</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
          <v-subheader>Prep Methods</v-subheader>
          <v-select
            v-model="recipePrepMethods"
            :items="prepMethods"
            label="Prep Methods"
            box
            multiple
            clearable
          />

          <v-select
            v-model="recipeDrinkware"
            :items="drinkware"
            label="Drinkware"
            item-text="name"
            box
            return-object
            clearable
          />

          <v-select
            v-model="recipeServed"
            :items="servingMethods"
            label="Serving Methods"
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
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import convert from 'convert-units';
import navToolbar from '@/components/navToolbar';

export default {
  components: {
    navToolbar,
  },

  data () {
    return {
      title: 'recipeName',
      prepMethods: [
        'Stir',
        'Stir on Big Rock',
        'Shake',
        'Short Shake',
        'Dirty Dump',
        'Build',
        'Dry Shake',
        'Slushy',
        'Muddle',
        'Fine Strain',
        'Swizzle',
      ],
      servingMethods: [
        'Neat',
        'On a Big Rock',
        'On a Collins Cube',
        'On the Rocks',
        'Over Crushed',
        'Slushy',
        'Up',
      ],
    }
  },

  head () {
    return {
      title: this.title,
      titleTemplate: '%s | Boozehound',
    }
  },

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

    ingredientUnits() {
      return convert().possibilities('volume');
    },

    recipePrepMethods: {
      get() {
        return this.$store.state.recipes.recipe.prepMethods;
      },
      set(recipePrepMethods) {
        this.$store.dispatch('recipes/setPrepMethods', recipePrepMethods)
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

    recipeServed: {
      get() {
        return this.$store.state.recipes.recipe.served;
      },
      set(recipeServed) {
        this.$store.dispatch('recipes/setServed', recipeServed)
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

      const formulas = {
        shake: () => -1.567 * (initialAbv ** 2) + 1.742 * initialAbv + 0.203,
        stir: () => -1.21 * (initialAbv ** 2) + 1.246 * initialAbv + 0.145,
        shortShake: () => (-1.567 * (initialAbv ** 2) + 1.742 * initialAbv + 0.203) * 0.75,
        zero: () => 0,
      }

      const methods = {
        'Stir': formulas.stir(),
        'Stir on Big Rock': formulas.stir(),
        'Shake': formulas.shake(),
        'Short Shake': formulas.shortShake(),
        'Dirty Dump': formulas.shake(),
        'Build': formulas.zero(),
        'Dry Shake': formulas.zero(),
        'Slushy': formulas.zero(),
        'Muddle': formulas.zero(),
        'Fine Strain': formulas.zero(),
        'Swizzle': formulas.zero(),
      }

      return this.recipe.prepMethods.reduce((sum, method) => sum + methods[method], 0);
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
      // Volumes of ice in ml
      const iceVols = {
        'On the Rocks': 23.984132,
        'On a Collins Cube': 118.294,
        'On Crushed': capacity - this.finalVol,
        'On a Big Rock': 131.09647805253,
        'Neat': 0,
        'Slushy': 0,
        'Up': 0,
      };
      const iceVol = convert(iceVols[served]).from('ml').to(this.volumeUnits);
      const iceAmt = Math.floor(capacity / iceVol);
      const percent = ((this.finalVol + (iceAmt * iceVol)) / capacity);

      return percent * 100;
    },

  },

  methods: {
    addIngredient() {

    },
  },
}
</script>

<style lang="stylus">

  .v-input__prepend-outer, .v-input__append-outer {
    padding-top: 15px;
    
  }

  .inputNumber input[type='number'] {
      -moz-appearance: textfield;
  }
  .inputNumber input[type=number]::-webkit-outer-spin-button,
  .inputNumber input[type=number]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }

</style>

