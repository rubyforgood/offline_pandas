<template>
  <div class="bg-washed-blue">
    <div class="pa4 flex flex-row flex-wrap items-center justify-start">
      <div class="flex-auto pa1 tc">Modifiers</div>
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
import { getLocationIdForObservationId, getActionNameForObservationId } from '@/utils/getObservationData'
import { getModifiersFor } from '@/utils/getEthogramData'

export default {
  name: 'locations',
  props: ['observationId'],
  computed: {
    modifiers () {
      const locationId = getLocationIdForObservationId(this.$store.state.observations, this.observationId)
      const actionName = getActionNameForObservationId(this.$store.state.observations, this.observationId)
      return getModifiersFor(this.$store.state.ethograms, locationId, actionName)
    }
  },
  methods: {
    onAlertMe (e) {
      alert('hi')
    }
  }
}
</script>
