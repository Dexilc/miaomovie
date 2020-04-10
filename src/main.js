import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import Scroller from '@/components/Scroller'
Vue.component('Scroller', Scroller)

import Loading from '@/components/Loading'
Vue.component('Loading', Loading)

Vue.prototype.axios = axios
Vue.config.productionTip = false
Vue.filter('setWH', (url, arg) => {
  return url.replace(/w\.h/, arg)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')