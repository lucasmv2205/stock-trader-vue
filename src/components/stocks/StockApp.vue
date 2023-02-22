<template>
  <v-flex class="pr-3 pb-3 pt-0" xs12 md6 lg4>
    <v-card class="green darken-3 white--text">
      <v-card-title class="headline">
        <strong>{{ stock.name }} <small>(preço: {{ stock.price }})</small></strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field v-model.number="quantity" class="mr-2" type="number" label="Quantidade" />
        <v-btn :disabled="quantity <= 0 || !Number.isInteger(quantity)" @click="buyStock"
          class="green darken-3 white--text">Comprar</v-btn>
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