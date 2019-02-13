<template>
  <v-toolbar
    id="navBar"
    color="primary lighten-1"
    dark
    fixed
    app>
    <v-fade-transition hide-on-leave>
      <v-toolbar-side-icon 
        v-if="!searchActive"
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      />
    </v-fade-transition>
    <v-fade-transition hide-on-leave>
      <v-toolbar-title 
        v-if="!searchActive" 
        v-text="pageTitle" 
      />
    </v-fade-transition>
    <v-slide-x-reverse-transition hide-on-leave>
      <v-text-field
        v-if="searchActive"
        v-model="navSearch"
        :autofocus="searchActive"
        :prepend-icon-cb="() => searchActive = !searchActive"
        color="white"
        type="search"
        clearable
        hide-details
        full-width
        single-line
        placeholder="Search"
        prepend-icon="arrow_back"
        @blur="searchActive = false"
      />
    </v-slide-x-reverse-transition>
    <v-spacer v-if="!searchActive"/>
    <v-fade-transition hide-on-leave>
      <v-btn 
        v-if="!searchActive"
        icon
        ripple
        @click="searchActive = !searchActive">
        <v-icon>search</v-icon>
      </v-btn>
    </v-fade-transition>
    <template v-if="contextMenu">
      <v-menu
        bottom 
        left>
        <v-btn
          slot="activator"
          icon>
          
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile
            v-for="(item, index) in contextMenu"
            :key="index"
            :to="item.to">

            <v-list-tile-action icon>
              <v-icon v-if="item.icon">{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-title>{{ item.title }}</v-list-tile-title>

          </v-list-tile>
        </v-list>
      </v-menu>
    </template>
    <v-avatar 
      size="36" 
      class="hidden-md-and-down">
      <img src="@/static/gravatar.jpg">
    </v-avatar>
  </v-toolbar>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    pageTitle: {
      type: String,
      default: null,
    },
    contextMenu: {
      type: Array,
      default() {
        return null;
      }
    },
  },

  data() {
    return {
      searchActive: false,
    }
  },

  computed: {

    drawer: {
      get() {
        return this.$store.state.drawer.drawer;
      },
      set(drawer) {
        this.$store.dispatch('drawer/toggleDrawer', drawer);
      },
    },

    navSearch: {
      get() {
        return this.$store.state.navSearch.navSearch;
      },
      set(navSearch) {
        this.$store.dispatch('navSearch/set', navSearch);
      },
    },
  },
}
</script>

<style lang="stylus">
#navBar . {
  width: auto;
}
</style>
