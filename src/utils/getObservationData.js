export function getLocationIdForObservationId (store, observationId) {
  const observation = store.data[observationId]
  return observation.locationId
}

export function getActionNameForObservationId (store, observationId) {
  const observation = store.data[observationId]
  return observation.actionName
}
