<template>
  <v-app>
    
   <navbar />
   <router-view>
   </router-view>

  <!-- <home class="my-16" />
    <div style="height:200vh;background:white;"></div>-->
  <foter /> 
  </v-app>
</template>

<script>
import navbar from './components/navbar'
// import home from './components/home'
import foter from './components/footer'
export default {
  name: 'App',
  components: {
    navbar,
    // home,
    foter
  },
  data: () => ({
    //
  }),
};
</script>