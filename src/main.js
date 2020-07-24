import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueGeolocation from 'vue-browser-geolocation';

Vue.use(VueAxios, axios)
Vue.use(VueGeolocation); 

Vue.config.productionTip = true

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
