import { unpersistedObservations, markObservationsPersisted } from '@/utils/observationPersistence'

export default function runSync () {
  console.log('running sync')
  const observations = unpersistedObservations()
  if (observations.length === 0) {
    console.log('nothing new to sync')
    return
  }

  const now = (new Date()).toString()

  postObservations(observations, now)
    .then(() => { markObservationsPersisted(observations, now) })
    .catch(() => { console.log('failed to post observations') })
}

function postObservations (observations, sentAt) {
  return new Promise((resolve, reject) => {
    if (window.failPost) return reject()

    const dataToPost = {
      sent_at: sentAt,
      observations
    }
    console.log(dataToPost)
    return resolve()
  })
}
