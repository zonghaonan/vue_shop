import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/base.css'
import request from 'network/request.js'
Vue.prototype.$axios=request
// axios.defaults.baseURL='http://47.115.124.102:8888/api/private/v1/'
// Vue.prototype.$axios=axios
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')