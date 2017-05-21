import { v4 } from 'uuid'
import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    data: {},
    currentObservationSessionId: null,
    currentLocationId: null
  },
  mutations: {
    setObservationSession (state, { observationSessionId, locationId }) {
      state.currentObservationSessionId = observationSessionId
      state.currentLocationId = locationId
    },
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
    createObservationSession ({ commit }, { locationId }) {
      const observationSessionId = v4()
      commit('setObservationSession', { observationSessionId, locationId })
    },
    createObservation ({ commit, state }) {
      if (!state.currentObservationSessionId || !state.currentLocationId) {
        throw new Error('observations cannot be made without an active observation session')
      }

      const newId = v4()
      const newObservation = {
        id: newId,
        concluded: null,
        locationId: state.currentLocationId,
        observationSessionId: state.currentObservationSessionId
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
