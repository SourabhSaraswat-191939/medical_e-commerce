<template>
<div class="header"> 
    <v-app-bar
      app
      color="#003f5c"
      elevate-on-scroll
      style="height:10vh;"
      dark  
    >
     <v-spacer></v-spacer>
      
      <v-img 
      alt="Vuetify Logo"
          class="shrink mr-4"
          contain
          src="@/assets/company_logo2.png"
          transition="fab-transition"
          width="70"
       />
      <v-toolbar-title class="font-weight-bold ">MEDICARES SOLUTIONS</v-toolbar-title>
     
      <v-spacer></v-spacer>
      <v-btn>
     <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>



<v-card>
    <v-navigation-drawer
      v-model="drawer"
      dark
      fixed
      :mini-variant.sync="mini"
      permanent
      style="margin-top:10vh;height:90vh;"
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>MEDICARES</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in navitems"
          :key="item.title"
          link
          :to='item.link'
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
  </v-card>



    



</div>
  
</template>

<script>


export default {
  components: {
    
  },

  data: () => ({
      showSearchBoxIcon:true,
      drawer:true,
      navitems:[
        { title: 'Dashboard', icon: 'home', link:'/' },
          { title: 'Products', icon: 'bottle-tonic-plus', link:'/products' },
          { title: 'Categories', icon: 'beaker-plus-outline', link:'/categories' },
          { title: 'Orders', icon: 'bell-ring', link:'/orders' },
          { title: 'Active', icon: 'alpha-a-circle', link:'/active_orders' },
          { title: 'Rejected', icon: 'alpha-r-circle', link:'/rejected_orders' },


          // { title: 'Admin', icon: 'gavel', link: '' },
      ],
      mini:true,

  }),
};
</script>
