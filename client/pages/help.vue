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
      title: 'Help'
    }
  },

  head () {
    return {
      title: this.title,
      titleTemplate: '%s | Boozehound',
    }
  },

  meta: {
    title: 'Help',
  }
};

</script>
