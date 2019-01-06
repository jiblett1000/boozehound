<template>
  <v-layout
    v-scroll="fabHide">
    <v-flex>
      <v-list>
        <template v-for="(item, index) in items">

          <v-list-tile
            :key="item.title"
            avatar
          >
            <v-list-tile-avatar 
              v-if="item.avatar">
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
  export default {
    data() {
      return {
        fabVisible: true,
        items: [
          {
            title: 'Brunch this weekend?',
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'Oui oui',
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Brunch this weekend?',
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'Oui oui',
          },
          {
            title: 'Brunch this weekend?',
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          },
          {
            title: 'Oui oui',
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Brunch this weekend?',
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'Oui oui',
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Brunch this weekend?',
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'Oui oui',
          },
        ]
      }
    },

    methods: {
      fabHide() {
        this.fabVisible = false;
      }
    }
  }
</script>
