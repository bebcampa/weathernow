<template>
 <v-card
    class="mx-auto mt-5"
    max-width="1200"
    color="#6c757d"
    :elevation="24"
  >
    
  <v-card-title>
      <v-icon
        color= '#d4d6d9'
        class="mr-12"
        size="64"
      >
        mdi-satellite-variant
      </v-icon>
      <v-row align="start">
        <v-list-item-title class="headline white--text" >Estación meteorológica {{estacion}}</v-list-item-title>
        <div>
        </div>
      </v-row>

      <v-spacer></v-spacer>

      <v-btn icon class="align-self-start" size="28">
        <v-icon color='green lighten-1'>mdi-leak</v-icon>
      </v-btn>
        <v-list-item-subtitle class="headline white--text"> {{main}}, {{des}}</v-list-item-subtitle>
    </v-card-title>


    
      
    <v-card-text>
      <v-row  felx-d align="center" class="headline white--text">
        <v-col class="display-3" cols="6">
          {{temp}}&deg;C
         
        </v-col>
        <v-col cols="6">
          <img v-bind:src="img" />
          </v-col>
      </v-row>
    </v-card-text>
    <v-list-item>
      <v-list-item-icon>
        <v-icon class="headline white--text">mdi-weather-windy-variant</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle class="headline white--text">Viento {{speed}} km/h</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon class="headline white--text">mdi-water-percent</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle class="headline white--text"> {{hum}} %</v-list-item-subtitle>
    </v-list-item>

    <v-divider></v-divider>


   </v-card>
</template>

<script>

import axios from 'axios'
  export default {
      name: 'Temp',
      data (){
      return {
        temp:"N/A",
        speed:"N/A",
        hum:"N/A",
        estacion:"N/A",
        des:"N/A",
        main:"N/A",
        img: require('../assets/svg/ajax-loader.gif'),
        checking: true,
      }
    },  
    
    mounted () {
      this.getTemperatura()

    },
    created () {
      this.$getLocation({
          enableHighAccuracy: true,
          timeout: Infinity,
        })
        .then(coordinates => {
          this.getTemperaturaGeo(coordinates.lat, coordinates.lng);
        })
        .catch( function () {
          alert("Get default location! Madrid temperature.")
        });
    },
    methods: {
        getTemperatura() {
            var self=this;
            axios.get('https://apilaravel.herokuapp.com/api/temp', {
             })
                .then(function (response) {
                    // handle success
                self.fillData(response);
                self.checking = "true"
            })
            .catch(function (error) {
                // handle error
            console.log(error);
        
             })
            .then(function () {  

                });
                
        },
        getTemperaturaGeo(lat, lon) {
            var self=this;
            axios.get('https://apilaravel.herokuapp.com/api/temp?lat='+lat+'&lon='+lon, {
              
             })
                .then(function (response) {
                    // handle success
                self.fillData(response);
                self.checking = "true"
                console.log(lat)
                console.log(lon)
            })
            .catch(function (error) {
                // handle error
            console.log(error);
        
             })
            .then(function () {  

                });
                
        },
        fillData(response){
            this.temp = response.data.main.temp
            this.speed=response.data.wind.speed
            this.hum = response.data.main.humidity
            this.estacion = response.data.name
            this.des = response.data.weather[0].description
            this.main = response.data.weather[0].main
            this.img = require("../assets/svg/"+response.data.weather[0].icon+".png")
            console.log(response.data.main.temp)
            console.log(response)
         }
    },
    
  }
</script>
