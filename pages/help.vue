<template>
  <v-layout>
    <v-flex/>
  </v-layout>
</template>

<script>

export default {
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
