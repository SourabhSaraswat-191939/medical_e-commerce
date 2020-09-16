<template>
<div class="header"> 
    <v-app-bar
      app
      color="success"
      elevate-on-scroll
      style="height:10vh;"
    >
      <v-app-bar-nav-icon class="hidden-sm-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-img 
      alt="Vuetify Logo"
          class="shrink mr-4"
          contain
          src="../assets/logo.png"
          transition="fab-transition"
          width="40"
       />
      <v-toolbar-title class="hidden-sm-and-down">Company Name</v-toolbar-title>
     
     
      <v-spacer></v-spacer>

     <v-text-field
        class="mx-0"
        flat
        dark
        hide-details
        label="Search"
        solo-inverted
      >
      </v-text-field>
      <v-btn to="/" class="hidden-sm-and-up" color="white" icon>
        <v-icon large>mdi-magnify</v-icon>
      </v-btn> 
      <v-btn to="/" class="hidden-sm-and-down" color="yellow" large yellow>
        <v-icon large>mdi-magnify</v-icon>
        Search
      </v-btn> 

      <v-spacer></v-spacer>

      <v-btn to="/" color="white" class="hidden-sm-and-down mr-2"  text x-large>
        <v-icon large>mdi-home</v-icon>
        Home
      </v-btn>
      <v-btn to="/" color="white" class="hidden-sm-and-down mr-2" text x-large>
        <v-icon large>mdi-cart</v-icon>
        Cart
      </v-btn>

      <v-btn to="/login" color="white" class="b2" icon>
        <v-icon large>mdi-account-circle</v-icon>
        
      </v-btn>
      
    </v-app-bar>



<v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="../assets/developer.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Guest User</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="item in navitems"
          :key="item.title"
          link
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>mdi-{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>


      
    </v-navigation-drawer>




    



</div>
  
</template>

<script>


export default {
  components: {
    
  },

  data: () => ({
      showSearchBoxIcon:true,
      drawer:false,
      navitems:[
        { title: 'Dashboard', icon: 'home', link:'/' },
          { title: 'Account', icon: 'account', link:'login' },
          // { title: 'Admin', icon: 'gavel', link: '' },
      ]

  }),
};
</script>
