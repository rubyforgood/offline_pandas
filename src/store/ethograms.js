import Vue from 'vue'
import { keyBy } from 'lodash'
import AuthenticatedRequest from '../utils/AuthenticatedRequest'

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
    rehydrateData (state, { data }) {
      Object.values(data).forEach((ethogram) => {
        Vue.set(state.data, ethogram.id, ethogram)
      })
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
      fetch(new AuthenticatedRequest('/api/ethograms'))
        .then(response => response.json())
        .then(response => commit('setData', { data: [] }))
        .catch(error => commit('setError', { error }))
    }
  }
}
