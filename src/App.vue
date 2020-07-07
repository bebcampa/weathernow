<template>
  <v-app>
    <v-app-bar
      app
      color="#6c757d"
      dark
    >
      <div class="d-flex align-center">
         <v-icon
        color= '#d4d6d9'
        class="mr-12"
        size="50"
      >
        mdi-satellite-variant
      </v-icon>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/bebcampa/weathernow"
        target="_blank"
        text
      >
        <span class="mr-2">View on GITHUB</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <Temp/>
    </v-content>
    <v-footer color="#6c757d">
    <v-spacer></v-spacer>
    <div><span class="white--text">&copy; {{ new Date().getFullYear() }}</span></div>
  </v-footer>
  </v-app>
</template>

<script>

import Temp from './components/Temp';

export default {
  name: 'App',

  components: {
    Temp,
  },

  data: () => ({
    //
  }),
};
</script>
