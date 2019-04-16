<template>
  <v-layout 
    align-center
    justify-center
  >
    <v-flex 
      xs12 
      sm6
      md3
      text-xs-center
    >
      <v-card 
        flat
        color="primary"
        dark
      >
        <v-avatar
          size="96"
        >
          <img src="@/static/gravatar.jpg">
        </v-avatar>
        <v-card-text>
          <p class="mt-2 title text-uppercase">
            Goodbye, {{ userFirstName }}!
          </p>
          <p>
            <router-link 
              to="/login"
              class="secondary--text"
            >
              Log in
            </router-link>
            again.
          </p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  layout: 'auth',

  data () {
    return {
      title: 'Logged out',
      userFirstName: this.$store.state.user.firstName,
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

<style scoped>

</style>
