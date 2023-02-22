<template>
  <v-app-bar class="mb-4">
    <v-toolbar-title class="headline text-uppercase mr-4">
      <span>Stock</span>{{ ' ' }}
      <span class="font-weight-light">Trader</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/portfolio">Portfolio</v-btn>
      <v-btn text to="/stocks">Açoes</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn text>Finalizar Dia</v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn depressed elevation="0" color="#fff" v-bind="attrs" v-on="on">
            Salvar & Carregar
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>Salvar Dados</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Carregar Dados</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-app-bar>
</template>
<script>
export default {

}
</script>
<style></style>