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
        <v-card-text
          class="px-2">
          <v-form>
            <v-text-field 
              prepend-inner-icon="person" 
              name="email" 
              label="Email" 
              type="email"
              box/>
            <v-text-field 
              prepend-inner-icon="person" 
              name="firstName" 
              label="First Name" 
              type="text"
              box/>
            <v-text-field 
              prepend-inner-icon="person" 
              name="lastName" 
              label="Last Name" 
              type="text"
              box/>
            <v-text-field 
              id="password" 
              prepend-inner-icon="lock" 
              name="password" 
              label="Password" 
              type="password"
              box/>
            <v-text-field 
              id="confirmPassword" 
              prepend-inner-icon="lock" 
              name="confirmPassword" 
              label="Confirm Password" 
              type="password"
              box/>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn 
            block
            large
            color="secondary">
            Register
          </v-btn>
        </v-card-actions>
        <v-card-text
          class="grey--text text--lighten-1">
          <p>Already registered? Login
            <router-link 
              class="white--text" 
              to="/login">here
            </router-link>.
          </p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  layout: 'auth',
};
</script>
