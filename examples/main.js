import Vue from 'vue'
import App from './App.vue'
import hhcmui from '../packages'

Vue.config.productionTip = false
Vue.use(hhcmui)

new Vue({
  render: h => h(App)
}).$mount('#app')
