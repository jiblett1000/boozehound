<template>
  <v-layout>
    <TheToolbar 
      :page-title="title"
      :context-menu="contextMenu" 
    />
    <v-flex />
  </v-layout>
</template>

<script>
import TheToolbar from '@/components/TheToolbar';

export default {
  components: {
    TheToolbar,
  },

  data () {
    return {
      title: 'Orders',
      contextMenu: [
        { title: 'Sort', icon: 'sort' },
        { title: 'Filter', icon: 'filter_list' },
        { title: 'Export', icon: 'import_export' },
        { title: 'Settings', icon: 'settings', to: '/settings#orders' },
      ],
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
