export const observationObserver = store => {
  // called when the store is initialized
  store.subscribe((mutation, state) => {
    const { type } = mutation
    if (type !== 'observations/storeObservation') {
      return
    }
    markObservationsPersisted(Object.values(state.observations.data))
  })

  store.commit('observations/rehydrate', {
    data: unwrapperStoredObservations()
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
  const unpersisted = observations.filter(o => !o.persistedAt)
  const unwrapped = unpersisted.map(o => o.observation)

  return unwrapped
}

export function markObservationsPersisted (
  unwrappedObservations,
  persistedAt = null
) {
  const allWrappedObservations = locallyStoredObservations()
  unwrappedObservations.forEach(observation => {
    allWrappedObservations[observation.id] = { persistedAt, observation }
  })
  storeWrappedObservations(allWrappedObservations)
}

export function storeWrappedObservations (wrappedObservations) {
  localStorage.setItem('observations', JSON.stringify(wrappedObservations))
}

export function clearLocallyStoredObservations () {
  localStorage.setItem('observations', null)
}
