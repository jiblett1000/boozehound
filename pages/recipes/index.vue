<template>
  <v-layout
    v-scroll="fabHide">
    <v-flex>
      <v-list>
        <template v-for="(item, index) in recipes">

          <v-list-tile
            :key="item.title"
            avatar>
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"/>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider
            :key="index"/>
        </template>
      </v-list>
    </v-flex>
    <v-fab-transition>
      <v-btn
        :class="fabVisible"
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

  export default {
    fetch({store}) {
      store.dispatch('checkContextMenu', this.menu);
    },
    
    data() {
      return {
        fabVisible: true,
        menu: [
          { title: 'Sort' },
          { title: 'Group' },
          { title: 'Filter' },
          { title: 'Export' },
          { title: 'Settings' },
        ],
        recipes: [
          {
            avatar: 'https://api.adorable.io/avatars/285/abott@adorable.png',
            title: 'Old Fashioned',
          },
          {
            avatar: 'http://i.pravatar.cc/150?img=3',
            title: 'Paloma',
          },
          {
            avatar: 'http://i.pravatar.cc/150?img=45',
            title: 'Tommy\'s Margarita',
          },
          {
            avatar: 'http://i.pravatar.cc/150?img=34',
            title: 'Grasshopper',
          },
          {
            avatar: 'http://i.pravatar.cc/150?img=35',
            title: 'Americano',
          },
          {
            avatar: 'http://i.pravatar.cc/150?img=8',
            title: 'Aperol Spritz',
          },
          {
            avatar: 'https://api.adorable.io/avatars/285/abott@adorable.png',
            title: 'French 75',
          },
          {
            avatar: 'http://i.pravatar.cc/150?img=5',
            title: 'Jack Rose',
          },
          {            
            avatar: 'https://api.adorable.io/avatars/285/abott@adorable.png',
            title: 'Mojito',
          },
          {
            avatar: 'http://i.pravatar.cc/150?img=12',
            title: 'Negroni',
          },
          {
            avatar: 'http://i.pravatar.cc/150?img=13',
            title: 'Sherry Cobbler',
          },
          {
            avatar: 'http://i.pravatar.cc/150?img=50',
            title: 'Sazerac',
          },
          {
            avatar: 'http://i.pravatar.cc/150?img=46',
            title: 'Singapore Sling',
          },
          {
            avatar: 'http://i.pravatar.cc/150?img=64',
            title: 'Pisco Sour',
          },
          {
            avatar: 'http://i.pravatar.cc/150?img=5',
            title: 'Paper Plane',
          },
        ]
      }
    },

    computed: {
      ...mapState({
        contextMenu: 'contextMenu',
      })
    },

    methods: {
      fabHide() {
        this.fabVisible = false;
      }
    },
  }
</script>
