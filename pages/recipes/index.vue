<template>
  <v-layout>
    <v-flex>
      <v-list>
        <template v-for="(recipe, index) in recipes">

          <v-list-tile
            :key="recipe.title"
            avatar>
            <v-list-tile-avatar>
              <img :src="recipe.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="recipe.title"/>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider :key="index"/>
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

export default {
  meta: {
    title: 'Recipes',
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
