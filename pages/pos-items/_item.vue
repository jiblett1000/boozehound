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

  data() {
    return {
      title: 'POS Item',
      contextMenu: [
        { title: 'Sort' },
        { title: 'Group' },
        { title: 'Filter' },
        { title: 'Export' },
        { title: 'Settings' },
      ],
    }
  },
}
</script>
