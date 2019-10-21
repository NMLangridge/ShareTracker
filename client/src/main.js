import Vue from 'vue'
import HighchartsVue from 'highcharts-vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(HighchartsVue)

new Vue({
  render: h => h(App),
}).$mount('#app')
