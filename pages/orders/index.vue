<template>
  <v-layout>
    <nav-toolbar :page-title="title" />
    <v-flex/>
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
      title: 'Orders'
    }
  },

  head () {
    return {
      title: this.title,
      titleTemplate: '%s | Boozehound',
    }
  },
}
</script>
