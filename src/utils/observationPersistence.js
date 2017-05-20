export function locallyStoredObservations () {
  return JSON.parse(localStorage.getItem('observations')) || {}
}

export function unpersistedObservations () {
  const observations = Object.values(locallyStoredObservations())
  const unpersisted = observations.filter(o => !o.persistedAt)
  const unwrapped = unpersisted.map(o => o.observation)

  return unwrapped
}

export function markObservationsPersisted (unwrappedObservations, persistedAt) {
  const allWrappedObservations = locallyStoredObservations()
  unwrappedObservations.forEach((observation) => {
    allWrappedObservations[observation.id] = { persistedAt, observation }
  })
  storeWrappedObservations(allWrappedObservations)
}

export function storeWrappedObservations (wrappedObservations) {
  localStorage.setItem('observations', JSON.stringify(wrappedObservations))
}

export function putTestDataInStorage () {
  const testData = {
    'uuid-goes-here': {
      persistedAt: null,
      observation: {
        'id': 'uuid-goes-here',
        'observation_session_id': 'uuid-goes-here',
        'timestamp': '2017-05-19T01:15:09.728Z',
        'subject': 'Minerva',
        'behavior': 'walking',
        'modifier': 'quickly'
      }
    },
    'other-uuid-goes-here': {
      persistedAt: null,
      observation: {
        'id': 'other-uuid-goes-here',
        'observation_session_id': 'uuid-goes-here',
        'timestamp': '2017-05-19T01:15:09.728Z',
        'subject': 'Minerva',
        'behavior': 'fighting',
        'target': 'Lulu'
      }
    }
  }

  storeWrappedObservations(testData)
}

export function clearLocallyStoredObservations () {
  localStorage.setItem('observations', null)
}
