export function getLocation (store, locationId) {
  return store.data[locationId]
}

export function getSubjectsForLocation (store, locationId) {
  const location = getLocation(store, locationId)
  if (!location) return []
  return location.subjects
}

export function getBehaviorsForLocation (store, locationId) {
  const location = getLocation(store, locationId)
  if (!location) return []
  return location.behaviors
}

export function getModifiersFor (store, locationId, behaviorName) {
  const behaviors = getBehaviorsForLocation(store, locationId)
  const behavior = behaviors.filter((behavior) => {
    return (behavior.name === behaviorName)
  })[0]
  const modifiers = behavior.modifiers
  return modifiers
}
