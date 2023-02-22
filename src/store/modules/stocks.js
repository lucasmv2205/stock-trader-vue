import stocks from '../../data/stocks'

export default {
  state: {
    stocks: []
  },
  mutations: {
    setStocks(state, stocks) {
      state.stocks = stocks
    }
  },
  actions: {
    buyStock({ commit }, order) {
      commit('buyStock', order)
    },
    initStocks({ commit }) {
      // iniciar estado com chamada a api
      commit('setStocks', stocks)
    }
  },
  getters: {
    stocks(state) {
      return state.stocks
    }
  }
}