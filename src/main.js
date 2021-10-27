import Vue from 'vue'
import App from './App.vue'
import languagePlugin from './plugins/translate-plugin'
import store from './plugins/store'
import en from './plugins/language/en'
import fr from './plugins/language/fr'

Vue.config.productionTip = false

Vue.use(languagePlugin, store, { 'en': en, 'fr': fr })

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
