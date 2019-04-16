<template> 
  <v-navigation-drawer
    id="TheDrawer"
    v-model="drawer"
    fixed
    app
  >
    <v-toolbar
      class="hidden-md-and-down"
      color="primary"
      dark
    >
      <v-toolbar-title>Boozehound</v-toolbar-title>
    </v-toolbar>
  
    <v-list>
      <v-list-tile 
        avatar
        class="hidden-md-and-up my-3"
      >
        <v-avatar 
          size="64"
        >
          <img src="@/static/gravatar.jpg">
        </v-avatar>
      </v-list-tile>
      <v-list-tile class="hidden-md-and-up">
        <v-list-tile-content>
          <v-list-tile-title>{{ fullName }}</v-list-tile-title>
          <v-list-tile-sub-title>{{ userEmail }}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-divider class="hidden-md-and-up my-3" />

      <template v-for="(item, i) in TheMenu">
        <v-list-group
          v-if="item.menu"
          :key="i"
          :prepend-icon="item.icon"
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>
                {{ item.title }}
              </v-list-tile-title>
            </v-list-tile>
          </template>
  
          <v-list-tile
            v-for="(link, k) in item.menu"
            :key="k"
            :to="item.href"
            router
            exact
          >
            <v-list-tile-action>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.title }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>

        <v-list-tile
          v-else
          :key="i"
          :to="item.href"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.title }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  data() {
    return {
      TheMenu:[
        { 
          href: '/dashboard', 
          title: 'Dashboard', 
          icon: 'dashboard', 
        },
        { 
          href: '/recipes', 
          title: 'Recipes', 
          icon: 'book', 
          menu: [
            {
              href: '/recipes/drinks',
              title: 'Drinks',
            },
            {
              href: '/recipes/components',
              title: 'Components',
            },
            {
              href: '/recipes/drinkware',
              title: 'Drinkware',
            },
            {
              href: '/recipes/garnishes',
              title: 'Garnishes'
            }
          ]
        },
        { 
          href: '/inventory', 
          title: 'Inventory', 
          icon: 'ballot', 
        },
        { 
          href: '/orders',
          title: 'Orders', 
          icon: 'view_list', 
        },
        { 
          href: '/pos-items',
          title: 'POS Items', 
          icon: 'tablet_android', 
        },
        { 
          href: '/reports', 
          title: 'Reports', 
          icon: 'trending_up', 
        },
        {

        },
        { 
          href: '/settings',
          title: 'Settings', 
          icon: 'settings', 
        },
        { 
          href: '/help',
          title: 'Help', 
          icon: 'help', 
        },
      ],
    }
  },
  computed: {
    ...mapState({
      userEmail: state => state.user.email,
    }),
    ...mapGetters({
      fullName: 'user/fullName',
    }),
    
    drawer: {
      get() {
        return this.$store.state.drawer.drawer;
      },
      set(drawer) {
        this.$store.dispatch('drawer/toggleDrawer', drawer);
      },
    },
  }
}
</script>

<style lang="stylus">

</style>

