<template>
<div class="home">
  


    <v-carousel
    cycle
    class="mx-50"
    style="margin-top:0vh;"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      
      v-for="(slide,i) in slides"
      :key="i"
      :src="slide.src"
      height="auto"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
    <v-row 
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3 font-weight-bold" dark><span style="color:white;text-shadow: 2px 2px #4feb3b;">{{ slide.name }}</span></div>
        </v-row>
    </v-carousel-item>
  </v-carousel>



<hr>
<br><br>

<v-hover
        v-slot:default="{ hover }"
        open-delay="100"
      >
        <v-card
          :elevation="hover ? 16 : 2"
          class="mx-auto"
          height="auto"
          max-width="100%"
        >
          <v-card-text :elevation="hover ? 16 : 2" class="font-weight-medium text-center title">
            <p style="color:green;font-size:5vh;font-weight:bold;text-shadow: 2px 2px 2px #000000;">EXPLORE OUR STORE</p>
          </v-card-text>
        </v-card>
      </v-hover>

<br>
<v-parallax
    height="auto"
   src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"> 


  
<v-container
  class="d-flex justify-space-around flex-wrap mb-6"
>


  <v-card
    class="mx-5 mb-10"
    max-width="350"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="../assets/slider2.jpg"
    >
      <v-card-title>Safety Products</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">ABOUT CATEGORY :</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>All The Medical Equipments Including ECF Machine, Portable Oxygen Machine etc .</div>

        <div>Whitsunday Island, Whitsunday Islands</div>
      </v-card-text>

    <v-card-actions>
      <v-btn
        class="mx-auto"
        color="orange"
        rounded
      >
        Explore The Category
        <v-icon right dark>mdi-arrow-right-bold</v-icon>
      </v-btn>
    </v-card-actions>
    
  </v-card>

  <v-card
      class="mx-5 mb-10"
      max-width="350"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        src="../assets/slider3.jpg"
      >
        <v-card-title>Medical Equipments</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">ABOUT CATEGORY :</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>All The Medical Equipments Including ECF Machine, Portable Oxygen Machine etc .</div>

        <div>Whitsunday Island, Whitsunday Islands</div>
      </v-card-text>

      <v-card-actions>
        <v-btn
          class="mx-auto"
          color="orange"
          rounded
        >
          Explore The Category
          <v-icon right dark>mdi-arrow-right-bold</v-icon>
        </v-btn>
      </v-card-actions>
      
    </v-card>
  <v-card
    class="mx-5 mb-10"
    max-width="350"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="../assets/slider1.jpg"
    >
      <v-card-title>Medicines</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">ABOUT CATEGORY :</v-card-subtitle>

      <v-card-text class="text--primary">
        <div>All The Medical Equipments Including ECF Machine, Portable Oxygen Machine etc .</div>

        <div>Whitsunday Island, Whitsunday Islands</div>
      </v-card-text>

    <v-card-actions>
      <v-btn
        class="mx-auto"
        color="orange"
        rounded
      >
        Explore The Category
        <v-icon right dark>mdi-arrow-right-bold</v-icon>
      </v-btn>
    </v-card-actions>
    
  </v-card>
  
</v-container>

  </v-parallax>




<hr>
<br><br>

<v-hover
        v-slot:default="{ hover }"
        open-delay="100"
      >
        <v-card
          :elevation="hover ? 16 : 2"
          class="mx-auto"
          height="auto"
          max-width="100%"
        >
          <v-card-text :elevation="hover ? 16 : 2" class="font-weight-medium text-center title">
            <p style="color:green;font-size:5vh;font-weight:bold;text-shadow: 2px 2px 2px #000000;">FEATURES</p>
          </v-card-text>
        </v-card>
      </v-hover>

<br>



  
  <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <v-card
        
        :color="item.color"
        dark
      >
        <v-card-title class="title">{{item.title}}</v-card-title>
        <v-card-text class="white text--primary">
          <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
          <!-- <v-btn
            :color="item.color"
            class="mx-0"
            outlined
          >
            Button
          </v-btn> -->
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>


<hr>
<br><br>

<v-hover
        v-slot:default="{ hover }"
        open-delay="100"
      >
        <v-card
          :elevation="hover ? 16 : 2"
          class="mx-auto"
          height="auto"
          max-width="100%"
        >
          <v-card-text :elevation="hover ? 16 : 2" class="font-weight-medium text-center title">
            <p style="color:green;font-size:5vh;font-weight:bold;text-shadow: 2px 2px 2px #000000;">ABOUT</p>
          </v-card-text>
        </v-card>
      </v-hover>

<br>


  <v-card class="about" style="height:400px;bo">
  <div style="float:left;border:1px solid black;height:200px;text-align:center;width:40%;margin-top:50px;margin-left:50px;" data-aos="zoom-in-left" data-aos-duration="2000">
    <p>THIS IS THE ABOUT SECTION , <br>JDFSAFFASDAFSDAFSDF DSFASFDAS SADF</p>
  </div>
  <div style="float:right;" data-aos="zoom-in-down" data-aos-delay="2000" data-aos-duration="3000">
    <p><img height="300px" src="../assets/doctor.png" /></p>
  </div>
  </v-card>
  
   

</div>
</template>


<script>
export default {
    data () {
      return {
        show: true,
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          {
            name: 'MEDICINES',
            src: require('../assets/slider1.jpg'),
          },
          {
            name: 'SANITIZERS AND MASKS',
            src: require('../assets/slider2.jpg'),
          },
          {
            name: 'MEDICAL EQUIPMENTS',
            src: require('../assets/slider3.jpg'), 
          },
          {
            name: 'STEAM INHALERS',
            src: require('../assets/slider4.jpg'), 
          },
        ],
        items: [
        {
          title:'Trusted',
          color: 'red lighten-2',
          icon: 'mdi-star',
        },
        {
          title:'Fast Delivery',
          color: 'purple darken-1',
          icon: 'mdi-book-variant',
        },
        {
          title:'Contactless Delivery',
          color: 'green lighten-1',
          icon: 'mdi-airballoon',
        },
        {
          title:'Online Delivery',
          color: 'indigo',
          icon: 'mdi-buffer',
        },
      ],
      }
    },
}
</script>

<style scoped>

.slide-fade-enter-active {
  
  animation: bounce-in .5s;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translate(10px,30px);

  opacity: 0;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

</style>