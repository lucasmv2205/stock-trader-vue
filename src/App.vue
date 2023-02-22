<template>
  <v-app>
    <v-main>
      <HeaderApp />
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HeaderApp from './components/HeaderApp.vue'
export default {
  components: { HeaderApp },
  name: 'App',
  created() {
    this.$store.dispatch('initStocks')
  }
};
</script>
