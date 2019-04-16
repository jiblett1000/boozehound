<template>
  <v-layout>
    <TheToolbar :page-title="title" />
    <v-flex />
  </v-layout>
</template>

<script>
import TheToolbar from '@/components/TheToolbar';

export default {
  components: {
    TheToolbar,
  },
  
  data() {
    return {
      title: 'Order #',
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
