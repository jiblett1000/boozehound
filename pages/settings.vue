<template>
  <v-layout>
    <nav-toolbar :page-title="title" />
    <v-flex>
      <v-subheader id="orders">Orders</v-subheader>
      <v-subheader id="recipes">Recipes</v-subheader>
      <v-subheader id="pos-items">POS</v-subheader>
    </v-flex>
  </v-layout>
</template>

<script>
import navToolbar from '@/components/navToolbar';

export default {
  components: {
    navToolbar,
  },

  data () {
    return {
      title: 'Settings',
    }
  },

  head () {
    return {
      title: this.title,
      titleTemplate: '%s | Boozehound',
    }
  },
};
</script>
