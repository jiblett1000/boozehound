<template>
  <v-layout>
    <TheToolbar 
      :page-title="title"
      :context-menu="contextMenu"/>
    <v-flex>
      <v-list>
        <template v-for="(recipe, index) in recipesFilteredList">

          <v-list-tile
            :key="recipe.name"
            to="/recipes/:id"
            avatar>

            <v-list-tile-avatar>
              <img :src="recipe.image">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="recipe.name"/>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider :key="index"/>
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
        fab>

        <v-icon>add</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex';
import TheToolbar from '@/components/TheToolbar';

export default {
  components: {
    TheToolbar,
  },

  data () {
    return {
      title: 'Recipes',
      contextMenu: [
        { title: 'Sort', icon: 'sort' },
        { title: 'Filter', icon: 'filter_list' },
        { title: 'Export', icon: 'import_export' },
        { title: 'Settings', icon: 'settings', to: '/settings#recipes' },
      ],
    }
  },
  head () {
    return {
      title: this.title,
      titleTemplate: '%s | Boozehound',
    }
  },
  
  computed: {
    ...mapState({
      recipesList: state => state.recipes.list,
    }),

    navSearch: {
      get() {
        return this.$store.state.navSearch.navSearch;
      },
      set(navSearch) {
        this.$store.dispatch('set', navSearch);
      },
    },

    recipesFilteredList() {
      return this.recipesList.filter(recipe => {
        return recipe.name.toLowerCase().includes((this.navSearch ? this.navSearch : '').toLowerCase())
      })
    },
  },
}
</script>
