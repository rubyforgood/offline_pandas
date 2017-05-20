import { v4 } from 'uuid'

export default {
  namespaced: true,
  state: {
    data: {}
  },
  mutations: {
    setObservation (state, observation) {
      state.data[observation.id] = observation
    }
  },
  actions: {
    createObservation ({ commit }, locationId) {
      const newId = v4()
      const newObservation = { id: newId, locationId }
      commit('setObservation', newObservation)
      return newObservation
    }
  }
}