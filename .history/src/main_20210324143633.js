import Vue from 'vue'
import App from './App.vue'
import './assets/styles/styles.scss'
import store from './vuex/store'
import { BootstrapVue } from 'bootstrap-vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
