import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Notification from 'vue-notification'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(Notification)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
