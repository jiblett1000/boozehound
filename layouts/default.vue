<template>
  <v-app>
    <nav-drawer />
    <v-content>
      <v-container
        fluid
        pa-0>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import navDrawer from '@/components/navDrawer';

export default {

  components: {
    navDrawer,
  },
}

</script>
