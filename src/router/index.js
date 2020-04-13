import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie'
import mineRouter from './mine'
import cinemaRouter from './cinema'
import adminRouter from './admin'

Vue.use(VueRouter)

const routes = [
  movieRouter, mineRouter, cinemaRouter, adminRouter, {
    path: '/*',
    redirect: '/movie'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  // base: 'miaomiao',
  routes
})

export default router