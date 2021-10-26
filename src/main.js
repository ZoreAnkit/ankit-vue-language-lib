import Vue from 'vue'
import App from './App.vue'
import languagePlugin from './plugins/translate-plugin'
import store from './plugins/store'

Vue.config.productionTip = false

Vue.use(languagePlugin)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
