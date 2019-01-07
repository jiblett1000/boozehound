<template>
  <v-layout 
    align-center
    justify-center>
    <v-flex 
      xs12 
      sm6
      md3
      text-xs-center>
      <v-card 
        flat
        color="primary"
        dark>
        <v-avatar
          size="96">
          <img src="http://i.pravatar.cc/300?img=2">
        </v-avatar>
        <v-card-text>
          <p class="mt-2 title text-uppercase">Goodbye, {{ userName }}!</p>
          <p>
            <router-link 
              to="/login"
              class="secondary--text">Login
            </router-link>
            again.</p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      userName: 'Christian',
    }
  }
};
</script>
