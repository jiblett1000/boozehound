<template>
  <v-layout>
    <TheToolbar 
      :page-title="title"
      :context-menu="contextMenu" 
    />
    <v-flex>
      <v-list>
        <template v-for="(recipe, index) in recipesFilteredList">
          <v-list-tile
            :key="recipe.name"
            to="/recipes/:id"
            avatar
          >
            <v-list-tile-avatar>
              <img :src="recipe.image">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>
                {{ recipe.name }}
              </v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn 
                icon 
                ripple
              >
                <v-icon color="grey lighten-1">
                  more_vert
                </v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>

          <v-divider :key="index" />
        </template>
      </v-list>
    </v-flex>
    <v-fab-transition>
      <v-btn 
        color="secondary"
        fixed
        large
        bottom
        right
        fab
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex';
import TheToolbar from '@/components/TheToolbar';
import recipesTemp from '@/assets/drinks';

export default {
  components: {
    TheToolbar,
  },

  data () {
    return {
      recipesTemp,
      title: 'Recipes',
      contextMenu: [
        { title: 'Sort', icon: 'sort' },
        { title: 'Filter', icon: 'filter_list' },
        { title: 'Export', icon: 'import_export' },
        { title: 'Settings', icon: 'settings', to: '/settings#recipes' },
      ],
    }
  },

  computed: {
  ...mapState({
    recipesList: state => state.recipes.list,
  }),
/*
  fetch ({store}) {
    store.dispatch('recipes/setList');
  },
*/
  head () {
    return {
      title: this.title,
      titleTemplate: '%s | Boozehound',
    }
  },

    navSearch: {
      get() {
        return this.$store.state.navSearch.navSearch;
      },
      set(navSearch) {
        this.$store.dispatch('set', navSearch);
      },
    },

    recipesFilteredList() {
      return this.recipesTemp.filter(recipe => {
        return recipe.name.toLowerCase().includes((this.navSearch ? this.navSearch : '').toLowerCase())
      })
    },
  },
}
</script>
