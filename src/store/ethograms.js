import { keyBy } from 'lodash'

export default {
  namespaced: true,
  state: {
    data: {},
    loading: false,
    error: null
  },
  mutations: {
    setData (state, { data }) {
      state.loading = false
      state.data = keyBy(data, 'id')
    },
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
      fetch('/api/ethograms')
        .then(response => response.json())
        .then(response => commit('setData', { data: response.data }))
        .catch(error => commit('setError', { error }))
    }
  }
}