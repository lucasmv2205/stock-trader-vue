<template>
  <div>
    <v-layout row wrap>
      <StockApp v-for="stock in stocks" :key="stock.id" :stock="stock" />
    </v-layout>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import StockApp from './StockApp.vue'
export default {
  components: { StockApp },
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio'
    })
  }
}
</script>
<style></style>