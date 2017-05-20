export function getLocationIdForObservationId (store, observationId) {
  const observation = store.data[observationId]
  return parseInt(observation.locationId)
}
