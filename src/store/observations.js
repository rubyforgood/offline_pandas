import { v4 } from 'uuid'
import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    data: {
      '123': {
        id: '123',
        locationId: '123'
      },
      '456': {
        id: '123',
        locationId: '123',
        subject: 'Pamela'
      },
      '789': {
        id: '123',
        locationId: '123',
        subject: 'Pamela',
        actionName: 'walking',
        modifierName: 'quickly'
      }
    }
  },
  mutations: {
    storeObservation (state, observation) {
      Vue.set(state.data, observation.id, observation)
    }
  },
  actions: {
    createObservation ({ commit }, locationId) {
      const newId = v4()
      const newObservation = {
        id: newId,
        locationId,
        concluded: false
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
      const observation = { ...state.data[observationId], concluded: true }
      commit('storeObservation', observation)
    }
  }
}
