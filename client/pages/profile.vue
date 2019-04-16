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

  data () {
    return {
      title: 'Profile'
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
