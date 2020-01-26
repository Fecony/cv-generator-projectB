import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import axios from 'axios'
import router from './router'
import store from './store'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL || 'http://localhost:3000' // API server

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
