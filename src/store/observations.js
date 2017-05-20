import { v4 } from 'uuid'
import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    data: {
      123: {
        id: 123,
        locationId: 123
      },
      456: {
        id: 123,
        locationId: 123,
        subject: 'Pamela'
      },
      789: {
        id: 123,
        locationId: 123,
        subject: 'Pamela',
        actionName: 'walking'
      }
    }
  },
  mutations: {
    setObservation (state, observation) {
      Vue.set(state.data, observation.id, observation)
    },
    setSubject (state, {observationId, subject}) {
      Vue.set(state.data[observationId], 'subject', subject)
    }
  },
  actions: {
    createObservation ({ commit }, locationId) {
      const newId = v4()
      const newObservation = { id: newId, locationId }
      commit('setObservation', newObservation)
      return newObservation
    },
    assignSubject ({ state, commit }, { observationId, subjectName }) {
      commit('setSubject', { observationId, subject: subjectName })
    }
  }
}
