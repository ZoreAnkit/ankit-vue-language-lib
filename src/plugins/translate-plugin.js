import languageStore from './store/language.store'
import en from './en'
import fr from './fr'

export default {

    install: (app) => {
        app.provide('LngGStore', languageStore)

        app.mixin({
            inject: ['LngGStore'],
            methods: {
                translate(key) {
                    if (this.LngGStore['setLanguage'] == 'fr') {
                        return fr[key];
                    } else {
                        return en[key];
                    }
                }
            }
        })
    }
}