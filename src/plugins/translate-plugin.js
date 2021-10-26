import en from './language/en'
import fr from './language/fr'

export default {

    install: (app) => {
        app.mixin({
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