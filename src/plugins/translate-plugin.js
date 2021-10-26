import en from './language/en'
import fr from './language/fr'

export default {

    install: (Vue, rootStore) => {
        rootStore.registerModule('languageStore', {
            state: {
                language: 'fr'
            },

            getters: {
                getLanguage: (state) => {
                    return state.language
                }
            },

            mutations: {
                SET_LANGUAGE(state, language) {
                    state.language = language
                }
            },

            actions: {
                setLocalLanguage({ commit }, language) {
                    commit('SET_LANGUAGE', language)
                },
            },
        });
        Vue.mixin({
            methods: {
                translate(key) {
                    if (rootStore.state.languageStore.language == 'fr') {
                        return fr[key];
                    } else {
                        return en[key];
                    }
                }
            }
        })
    }
}