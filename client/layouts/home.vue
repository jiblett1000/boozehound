<template>
  <v-app 
    color="primary"
  >
    <v-toolbar
      app
      dark
      color="primary lighten-1"
      flat
    >
      <v-app-bar-title v-text="title" />
      <v-spacer />
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <nuxt />
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Boozehound'
      }
    }
  }
</script>

<style lang="stylus">

</style>
