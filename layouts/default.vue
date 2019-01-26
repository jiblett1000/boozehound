<template>
  <v-app>
    <navDrawer />
    <navToolbar />
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
import navToolbar from '@/components/navToolbar';

export default {
  middleware: [
    'setContextMenu',
    'setPageTitle',
  ],

  components: {
    navDrawer,
    navToolbar,
  },
}

</script>
