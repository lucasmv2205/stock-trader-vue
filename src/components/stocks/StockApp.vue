<template>
  <v-flex class="pr-3 pb-3 pt-0" xs12 md6 lg4>
    <v-card class="green darken-3 white--text">
      <v-card-title class="headline">
        <strong>{{ stock.name }} <small>(preço: {{ stock.price | currency }})</small></strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field :error="inSufficientFunds" v-model.number="quantity" class="mr-2" type="number"
          label="Quantidade" />
        <v-btn :disabled="inSufficientFunds || quantity <= 0 || !Number.isInteger(quantity)" @click="buyStock"
          class="green darken-3 white--text">{{ inSufficientFunds ? 'Insuficiente' : 'Comprar' }}</v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>
<script>
export default {
  props: {
    stock: {
      required: true
    }
  },
  data() {
    return {
      quantity: 0
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds
    },
    inSufficientFunds() {
      return this.quantity * this.stock.price > this.funds
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.$store.dispatch('buyStock', order)

      this.quantity = 0
    }
  }
}
</script>
<style></style>