<template> 
  <v-navigation-drawer
    id="TheDrawer"
    v-model="drawer"
    fixed
    app>

    <v-toolbar
      class="hidden-md-and-down"
      color="primary"
      dark>
      <v-toolbar-title>Boozehound</v-toolbar-title>
    </v-toolbar>
  
    <v-list>
      <v-list-tile 
        avatar
        class="hidden-md-and-up my-3">
        <v-avatar 
          size="64">
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
          :prepend-icon="item.icon"
          :key="i">

          <v-list-tile 
            slot="activator">
            <v-list-tile-title>Recipes</v-list-tile-title>
          </v-list-tile>
  
          <template v-for="(item, i) in item.menu">
            <v-list-tile
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
    
        </v-list-group>

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

