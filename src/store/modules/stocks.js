/* eslint-disable no-unused-vars */
import stocks from "../../data/stocks";

export default {
  state: {
    stocks: [],
  },
  mutations: {
    setStocks(state, stocks) {
      state.stocks = stocks;
    },
    randomizeStocks(state) {
      state.stocks.forEach((stock) => {
        stock.price = Math.round(stock.price * (1 + Math.random() - 0.45));
      });
    },
  },
  actions: {
    randomizeStocks({ commit }) {
      commit("randomizeStocks");
    },
    buyStock({ commit }, order) {
      commit("buyStock", order);
    },
    initStocks({ commit }) {
      // iniciar estado com chamada a api
      commit("setStocks", stocks);
    },
  },
  getters: {
    stocks(state) {
      return state.stocks;
    },
  },
};
