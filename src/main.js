import Vue from 'vue'
import Blockchain from './Blockchain.vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
//Vue.use(Ethers)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(Blockchain),
}).$mount('#app')
