<template>
  <div class="behaviors">
    <div class="pa4 flex flex-row flex-wrap items-center justify-start">
      <div class="flex-auto pa1 tc">Behaviors</div>
    </div>
    <div class="f5 flex flex-row flex-wrap items-center justify-around pa2">
      <div v-for="actionName in behaviors">
        <a @click="assignAction({ observationId, actionName })" class="flex link pa3 mh2 mv3 ba b--gray br3 shadow-3 bg-white">
          {{ actionName }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { getBehaviorNamesForLocation } from '@/utils/getEthogramData'
import { getLocationIdForObservationId } from '@/utils/getObservationData'

export default {
  name: 'behaviors',
  props: ['observationId'],
  computed: {
    behaviors () {
      const locationId = getLocationIdForObservationId(this.$store.state.observations, this.observationId)
      return getBehaviorNamesForLocation(this.$store.state.ethograms, locationId)
    }
  },
  methods: {
    ...mapActions('observations', [
      'assignAction'
    ])
  }
}
</script>
