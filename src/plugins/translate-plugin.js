export default {

  install: (Vue, rootStore, languageFiles) => {
    rootStore.registerModule('languageStore', {
      state: {
        language: 'en'
      },
      getters: {
        language: (state) => {
          return state.language;
        },
      },
      mutations: {
        SET_LANGUAGE: (state, language) => {
          state.language = language
        }
      },
    });
    Vue.mixin({
      methods: {
        translate(key) {
          if (typeof languageFiles == 'object' && languageFiles !== null) {
            for (var languageKey of Object.keys(languageFiles)) {
              if (rootStore.hasModule('languageStore'))
                if (rootStore.state.languageStore.language == languageKey)
                  return languageFiles[languageKey][key];
            }
          }
        }
      }
    })
  }
}