import Vue from 'vue'
import { keyBy } from 'lodash'
import AuthenticatedRequest from '../utils/AuthenticatedRequest'

// fixturesOrLiveData('live') or fixturesOrLiveData('fixtures')
function fixturesOrLiveData (fixturesOrLive) {
  if (fixturesOrLive === 'live') {
    return new AuthenticatedRequest('/api/ethograms')
  } else if (fixturesOrLive === 'fixtures') {
    return '/static/fixtures.json'
  }
}

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
      fetch(fixturesOrLiveData('live'))
        .then(response => response.json())
        .then(response => commit('setData', { data: response.data }))
        .catch(error => commit('setError', { error }))
    }
  }
}
