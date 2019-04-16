<template>
  <v-app>
    <TheDrawer />
    <v-content>
      <v-container
        fluid
        pa-0
      >
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TheDrawer from '@/components/TheDrawer';

export default {

  components: {
    TheDrawer,
  },
}

</script>
