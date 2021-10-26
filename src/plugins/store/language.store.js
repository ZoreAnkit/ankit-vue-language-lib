const state = {
    language: 'fr'
}

const getters = {
    getLanguage: (state) => {
        return state.language
    }
}

const mutations = {
    SET_LANGUAGE(state, language) {
        state.language = language
    }
}

const actions = {
    setLocalLanguage({ commit }, language) {
        commit('SET_LANGUAGE', language)
    },
}

export const language = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}