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
      state.data = keyBy(data, 'id')
    }
  },
  actions: {
    fetchAll ({ commit }) {
      fetch('/static/fixtures.json')
        .then(response => response.json())
        .then(response => commit('setData', { data: response.data }))
    }
  }
}
