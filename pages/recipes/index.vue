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
  meta: {
    contextMenu: [
      { title: 'Sort' },
      { title: 'Group' },
      { title: 'Filter' },
      { title: 'Export' },
      { title: 'Settings' },
    ],
  },
  
  computed: {
    ...mapState('recipes', ['recipes']),
  },
}
</script>
