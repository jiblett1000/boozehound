<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app>

      <v-toolbar
        color="primary"
        dark>
        <v-toolbar-title class="ml-3 mr-5">Hup&nbsp;<span class="font-weight-light">Bar</span></v-toolbar-title>
      </v-toolbar>

      <v-toolbar
        flat
        class="transparent my-2">

        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider class="my-3" />

      <v-list>
        <template v-for="(item, i) in items">

          <v-divider
            v-if="item.divider"
            :key="i"
            class="my-3" />

          <v-list-tile
            v-else
            :to="item.to"
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
      color="primary lighten-1"
      dark
      fixed
      app>
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title {{$to(page-title)}} />
      <v-spacer />
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      drawer: null,
      items: [
        { icon: 'dashboard', title: 'Dashboard', to: '/dashboard' },
        { icon: 'book', title: 'Recipes', to: '/recipes' },
        { icon: 'ballot', title: 'Inventory', to: '/inventory' },
        { icon: 'view_list', title: 'Orders', to: '/orders' },
        { icon: 'tablet_android', title: 'POS Items', to: '/pos-items' },
        { icon: 'trending_up', title: 'Reports', to: '/reports' },
        { divider: true },
        { icon: 'settings', title: 'Settings', to: '/settings' },
        { icon: 'help', title: 'Help', to: '/help' },
      ],
      title: 'Boozehound',
    }
  },
  computed: {
    ...mapState({
      pagetitle: state => state.pageTitle,
    })
  }
}

</script>
