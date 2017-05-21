import {
  unpersistedObservations,
  markObservationsPersisted
} from '@/utils/observationPersistence'

import AuthenticatedRequest from '@/utils/AuthenticatedRequest'

export default function runSync () {
  console.log('running sync')
  const observations = unpersistedObservations()
  if (observations.length === 0) {
    console.log('nothing new to sync')
    return
  }

  const now = new Date().toString()

  postObservations(observations, now)
    .then(data => {
      const persistedIDs = data.filter(o => o.persisted).map(o => o.id)
      const persistedObservations = observations.filter(o =>
        persistedIDs.includes(o.id)
      )
      markObservationsPersisted(persistedObservations, now)
    })
    .catch(() => {
      console.log('failed to post observations')
    })
}

function postObservations (observations, sentAt) {
  return new Promise((resolve, reject) => {
    if (window.failPost) return reject()

    const dataToPost = {
      sent_at: sentAt,
      observations
    }

    return fetch(
      new AuthenticatedRequest('/api/observation_sessions', {
        method: 'POST',
        body: JSON.stringify(dataToPost)
      })
    )
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => {
        console.error('error', error)
        reject(error)
      })
  })
}
