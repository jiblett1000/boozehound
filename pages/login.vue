<template>
  <v-layout 
    align-center
    justify-center>
    <v-flex 
      xs12 
      sm8 
      md4>
      <v-card 
        flat
        color="primary"
        dark>
        <v-card-title>
          <v-flex 
            xs12 
            class="text-xs-center display-1 font-weight-bold text-uppercase">
            Boozehound
          </v-flex>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field 
              prepend-icon="person" 
              name="login" 
              label="Login" 
              type="text"/>
            <v-text-field 
              id="password" 
              prepend-icon="lock" 
              name="password" 
              label="Password" 
              type="password"/>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn 
            block
            large
            color="secondary">
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  layout: 'auth',
};
</script>


