import { v4 } from 'uuid'
import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    data: {}
  },
  mutations: {
    storeObservation (state, observation) {
      Vue.set(state.data, observation.id, observation)
    },
    rehydrate (state, { data }) {
      data.forEach(function (observation) {
        Vue.set(state.data, observation.id, observation)
      }, this)
    }
  },
  actions: {
    createObservation ({ commit }, locationId) {
      const newId = v4()
      const newObservation = {
        id: newId,
        locationId,
        concluded: null
      }
      commit('storeObservation', newObservation)
      return newObservation
    },
    assignSubject ({ state, commit }, { observationId, subjectName }) {
      const observation = {
        ...state.data[observationId],
        subject: subjectName
      }
      commit('storeObservation', observation)
    },
    assignAction ({ state, commit }, { observationId, actionName }) {
      const observation = { ...state.data[observationId], actionName }
      commit('storeObservation', observation)
    },
    assignModifier ({ state, commit }, { observationId, modifierName }) {
      const observation = { ...state.data[observationId], modifierName }
      commit('storeObservation', observation)
    },
    conclude ({ state, commit }, { observationId }) {
      const observation = {
        ...state.data[observationId],
        concluded: new Date()
      }
      commit('storeObservation', observation)
    }
  }
}
