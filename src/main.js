import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$http = axios 

axios.defaults.baseURL='http://3.6.163.113'
Vue.prototype.baseURL='http://3.6.163.113'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
