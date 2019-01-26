<template>
  <v-layout>
    <v-flex/>
  </v-layout>
</template>

<script>
export default {
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

  meta: {
    title: 'Orders',
    contextMenu: [
      { title: 'Sort' },
      { title: 'Group' },
      { title: 'Filter' },
      { title: 'Export' },
      { title: 'Settings' },
    ],
  },
}
</script>
