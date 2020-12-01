import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import './registerServiceWorker'
import { startMocking } from './services/mockAdapter'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = process.env.NODE_ENV === 'production'


Vue.use(Vuelidate)
if (process.env.VUE_APP_MOCKING === 'true') {
  startMocking()
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
