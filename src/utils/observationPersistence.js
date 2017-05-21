export const observationObserver = store => {
  // called when the store is initialized
  store.subscribe((mutation, state) => {
    const { type } = mutation
    if (type !== 'observations/storeObservation') {
      return
    }
    const localStorageFormattedObservations = Object.values(
      state.observations.data
    ).map(observation => {
      return {
        id: observation.id,
        observation_session_id: observation.observationSessionId,
        ethogram_id: observation.locationId,
        subject: observation.subject,
        modifier: observation.modifierName,
        behavior: observation.actionName,
        timestamp: observation.concluded
      }
    })
    markObservationsPersisted(localStorageFormattedObservations)
  })

  const vuexFormattedObservations = unwrapperStoredObservations().map(
    observation => {
      return {
        id: observation.id,
        observationSessionId: observation.observation_session_id,
        locationId: observation.ethogram_id,
        subject: observation.subject,
        modifierName: observation.modifier,
        actionName: observation.behavior,
        concluded: observation.timestamp
      }
    }
  )
  store.commit('observations/rehydrate', {
    data: vuexFormattedObservations
  })
}

export function locallyStoredObservations () {
  return JSON.parse(localStorage.getItem('observations')) || {}
}

export function unwrapperStoredObservations () {
  return Object.values(locallyStoredObservations()).map(o => o.observation)
}

export function unpersistedObservations () {
  const observations = Object.values(locallyStoredObservations())
  const concludedObservations = observations.filter(
    o => o.observation.timestamp
  )
  const unpersisted = concludedObservations.filter(o => !o.persistedAt)
  const unwrapped = unpersisted.map(o => o.observation)

  return unwrapped
}

export function markObservationsPersisted (
  unwrappedObservations,
  persistedAt = null
) {
  const allWrappedObservations = locallyStoredObservations()
  unwrappedObservations.forEach(observation => {
    // TODO Should we make the store just be aware of persisted at?
    if (
      !allWrappedObservations[observation.id] ||
      !allWrappedObservations[observation.id].persistedAt
    ) {
      allWrappedObservations[observation.id] = { persistedAt, observation }
    }
  })
  storeWrappedObservations(allWrappedObservations)
}

export function storeWrappedObservations (wrappedObservations) {
  localStorage.setItem('observations', JSON.stringify(wrappedObservations))
}

export function clearLocallyStoredObservations () {
  localStorage.setItem('observations', null)
}
