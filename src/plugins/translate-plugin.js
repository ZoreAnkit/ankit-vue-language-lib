import en from './language/en'
import fr from './language/fr'
import store from './store'

export default {

    install: (Vue) => {
        Vue.provide(store)

        Vue.mixin({
            methods: {
                translate(key) {
                    if (this.$store.state.language == 'fr') {
                        return fr[key];
                    } else {
                        return en[key];
                    }
                }
            }
        })
    }
}