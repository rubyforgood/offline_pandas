import { keyBy } from 'lodash'

export default {
  namespaced: true,
  state: {
    data: null,
    loading: false,
    error: null
  },
  mutations: {
    setData (state, { data }) {
      state.loading = false
      state.data = keyBy(data, 'id')
    },
    rehydrateData (state, { data }) {
      state.data = data
    }
    setLoading (state) {
      state.loading = true
    },
    setError (state, { error }) {
      state.loading = false
      state.error = error
    }
  },
  actions: {
    fetchAll ({ commit }) {
      commit('setLoading')
      fetch('/static/fixtures.json')
        .then(response => response.json())
        .then(response => commit('setData', { data: response.data }))
        .catch(error => commit('setError', { error }))
    }
  }
}
