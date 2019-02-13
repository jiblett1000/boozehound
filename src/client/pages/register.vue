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
        <v-card-text>
          <v-form>
            <v-container
              class="pa-0">
              <v-layout 
                row 
                wrap>
                <v-flex
                  class="pa-0">
                  <v-text-field 
                    prepend-inner-icon="email" 
                    name="email" 
                    label="Email" 
                    type="email"
                    box/>
                </v-flex>
                <v-flex 
                  xs6
                  class="pa-0 pr-1">
                  <v-text-field 
                    prepend-inner-icon="person" 
                    name="firstName" 
                    label="First Name" 
                    type="text"
                    box/>
                </v-flex>
                <v-flex 
                  xs6
                  class="pa-0 pl-1">
                  <v-text-field 
                    prepend-inner-icon="person" 
                    name="lastName" 
                    label="Last Name" 
                    type="text"
                    box/>
                </v-flex>
                <v-flex
                  class="pa-0">
                  <v-text-field 
                    id="password" 
                    prepend-inner-icon="lock" 
                    name="password" 
                    label="Password" 
                    type="password"
                    box/>
                </v-flex>
                <v-flex
                  class="pa-0">
                  <v-text-field 
                    id="confirmPassword" 
                    prepend-inner-icon="lock" 
                    name="confirmPassword" 
                    label="Confirm Password" 
                    type="password"
                    box/>
                </v-flex>
              </v-layout>
            </v-container>
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
          <p>Already registered? 
            <router-link 
              class="secondary--text" 
              to="/login">Log in
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

  data () {
    return {
      title: 'Register'
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
