export default {

    install: (Vue, rootStore, languageFiles) => {
        rootStore.registerModule('languageStore', {
            state: {
                language: 'en'
            },
        });
        Vue.mixin({
            methods: {
                translate(key) {
                    for (var languageKey of Object.keys(languageFiles)) {
                        if (rootStore.state.languageStore.language == languageKey) {
                            return languageFiles[languageKey][key];
                        }
                    }
                }
            }
        })
    }
}