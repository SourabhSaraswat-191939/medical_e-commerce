<template>
    <v-app-bar
      app
      fixed
      color="success"
      elevate-on-scroll
      
    >
      <v-app-bar-nav-icon class="hidden-sm-and-up"></v-app-bar-nav-icon>
      <v-img 
      alt="Vuetify Logo"
          class="shrink mr-4"
          contain
          src="../assets/logo.png"
          transition="fab-transition"
          width="40"
       />
      <v-toolbar-title>Company Name</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn to="/" color="white" text x-large>
        <v-icon large>mdi-home</v-icon>
        Home
      </v-btn>
      <v-btn to="/" color="white" text x-large>
        <v-icon large>mdi-cart</v-icon>
        Cart
      </v-btn>
      <v-btn to="/" color="white" class="b2" icon>
        <v-icon large>mdi-account-circle</v-icon>
        
      </v-btn>
      
    </v-app-bar>
  
</template>

<script>


export default {
  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>
