<template>
  <v-layout row wrap>
    <StockApp v-for="stock in stocks" :key="stock.id" :stock="stock" />
  </v-layout>
</template>

<script>
import StockApp from './StockApp.vue'
export default {
  components: { StockApp },
  computed: {
    stocks() {
      return this.$store.getters.stocks
    }
  }
}
</script>
<style></style>