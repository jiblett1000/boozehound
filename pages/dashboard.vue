<template>
  <v-layout>
    <v-flex/>
  </v-layout>
</template>

<script>

export default {
  data () {
    return {
      title: 'Dashboard'
    }
  },

  head () {
    return {
      title: this.title,
      titleTemplate: '%s | Boozehound',
    }
  },

  meta: {
    title: 'Dashboard',
  },
};

</script>
