<template>

  <div class="login">
    <v-card width="400" class="mx-auto my-auto" style="margin-top:40vh">
      <v-card-title>
      <h1 class="display-1">LOGIN</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
          label="USERNAME"
          prepend-icon="mdi-account-circle"
          />
          <v-text-field 
          :type="showPassword ? 'text':'password'" 
          label="PASSWORD" 
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye':'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
      <v-btn color="success">Register</v-btn>
      <v-spacer />
      <v-btn color="info">Login</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    // HelloWorld,
  },

  data: () => ({
    showPassword:false,
  }),
};
</script>


<style scoped>
.login{
    padding-top: 30vh;
    height: 85vh;
    background-image: url(../assets/login_back.jpg);
    background-size: cover;
}
</style>