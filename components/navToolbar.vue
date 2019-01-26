<template>
  <v-toolbar
    id="navBar"
    color="primary lighten-1"
    dark
    fixed
    app>
    <v-toolbar-side-icon @click="drawer = !drawer" />
    <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>
    <v-spacer />
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
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
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
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
