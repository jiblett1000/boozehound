<template>
  <v-layout>
    <TheToolbar 
      :page-title="title"
      :context-menu="contextMenu" 
    />
    <v-flex>
      <v-list>
        <template v-for="(drink, index) in drinksFilteredList">
          <v-list-tile
            :key="index"
            to="/drinks/:id"
            avatar
          >
            <v-list-tile-avatar>
              <img :src="drink.image">
            </v-list-tile-avatar>
            
            <v-list-tile-content>
              <v-list-tile-title>
                {{ drink.name }}
              </v-list-tile-title>
            </v-list-tile-content>
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

export default {
  components: {
    TheToolbar,
  },

  data () {
    return {
      title: 'Drinks',
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
      drinksList: state => state.drinks.list,
    }),

    navSearch: {
      get() {
        return this.$store.state.navSearch.navSearch;
      },
      set(navSearch) {
        this.$store.dispatch('set', navSearch);
      },
    },

    drinksFilteredList() {
      return this.drinksList.filter(drink => {
        return drink.name.toLowerCase().includes((this.navSearch ? this.navSearch : '').toLowerCase())
      })
    },
  },
}
</script>
