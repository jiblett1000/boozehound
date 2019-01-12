<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app>

      <v-toolbar
        color="primary"
        dark>
        <v-toolbar-title>Boozehound</v-toolbar-title>
      </v-toolbar>

      <v-toolbar
        flat
        class="transparent my-2">

        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="@/static/gravatar.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ fullName }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider class="my-3" />

      <v-list>
        <template v-for="(item, i) in mainMenu">

          <v-divider
            v-if="item.divider"
            :key="i"
            class="my-3" />

          <v-list-tile
            v-else
            :to="item.href"
            :key="i"
            router
            exact>
            <v-list-tile-action>
              <v-icon v-html="item.icon" />
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title" />
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      id="navBar"
      color="primary lighten-1"
      dark
      fixed
      app>
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>
      <v-spacer />
 
      <v-text-field
        id="navSearch"
        hide-details
        prepend-inner-icon="search"
        single-line
        solo-inverted
        clearable
        flat/>

      <template v-if="contextMenu">
        <v-menu>
          <v-btn
            slot="activator"
            icon
          >
            <v-icon>more_vert</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile
              v-for="(item, index) in contextMenu"
              :key="index">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </template>
    </v-toolbar>
    <v-content>
      <v-container
        fluid
        pa-0>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';

export default {
  middleware: [
    'setContextMenu',
    'setPageTitle',
  ],

  data() {
    return {
      searchActive: null,
    }
  },

  computed: {
    ...mapState(['fullName']),
    ...mapState('mainMenu', ['mainMenu']),
    ...mapState('pageTitle', ['pageTitle']),
    ...mapState('contextMenu', ['contextMenu']),

    drawer: {
      get() {
        return this.$store.state.drawer.drawer;
      },
      set(drawer) {
        this.$store.dispatch('drawer/toggleDrawer', drawer);
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
