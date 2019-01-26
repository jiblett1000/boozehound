<template>
  <v-layout>
    <v-flex/>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      title: 'POS Items'
    }
  },

  head () {
    return {
      title: this.title,
      titleTemplate: '%s | Boozehound',
    }
  },

  meta: {
    title: 'POS Items',
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
