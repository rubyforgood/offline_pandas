<template>
  <div class="bg-washed-blue">
    <div class="pa4 flex flex-row flex-wrap items-center justify-start">
      <div class="flex-auto pa1 tc">Environments</div>
    </div>
    <div class="f5 flex flex-row flex-wrap items-center justify-around pa2">
      <div v-for="modifier in modifiers">
        <a href="/animals.html" class="flex link pa3 mh2 mv3 ba b--gray br3 shadow-3 bg-white">
          {{ modifier }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

function getBehaviorsForLocation (store, locationId) {
  const location = store.data[locationId]
  if (!location) return []
  return location.behaviors
}

function getModifiersFor (store, locationId, behaviorName) {
  const behaviors = getBehaviorsForLocation(store, locationId)
  const behavior = behaviors.filter((behavior) => {
    return (behavior.name === behaviorName)
  })[0]
  const modifiers = behavior.modifiers
  return modifiers
}

export default {
  name: 'locations',
  computed: {
    ...mapState('ethograms', {
      modifiers (store) {
        return getModifiersFor(store, 123, 'walking')
      }
    })
  },

  methods: {
    onAlertMe (e) {
      alert('hi')
    }
  },
  beforeMount () {
    return this.$store.dispatch('ethograms/fetchAll')
  }
}
</script>
