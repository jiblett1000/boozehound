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
        <v-card-text
          class="mt-2 title text-uppercase"
        >
          <p>Welcome back, {{ userFirstName }}!</p>
        </v-card-text>
        <v-card-text
          class="px-2"
        >
          <v-form>
            <v-text-field 
              prepend-inner-icon="person" 
              name="email" 
              label="Email" 
              type="email"
              box
              color="#fff"
            />
            <v-text-field 
              id="password" 
              prepend-inner-icon="lock" 
              name="password" 
              label="Password" 
              type="password"
              box
              color="#fff"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn 
            block
            large
            color="secondary"
          >
            Login
          </v-btn>
        </v-card-actions>
        <v-card-text
          class="grey--text text--lighten-1"
        >
          <p>
            Not registered?
            <router-link 
              class="secondary--text" 
              to="/register"
            >
              Sign up
            </router-link> for an account.
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
      title: 'Log In',
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
input[type=email]:focus {
  background-color: #fff;
}
</style>


