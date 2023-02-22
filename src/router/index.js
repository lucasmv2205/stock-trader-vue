import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeApp from '../components/HomeApp.vue'
import PortfolioApp from '../components/portfolio/PortfolioApp.vue'
import StockApp from '../components/stocks/StocksApp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeApp
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioApp
  },
  {
    path: '/stocks',
    name: 'stocks',
    component: StockApp
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
