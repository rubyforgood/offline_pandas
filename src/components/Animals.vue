<template>
  <div class="animals">
    <div class="pa4 flex flex-row flex-wrap items-center justify-start">
      <div class="flex-auto pa1 tc">Subjects</div>
    </div>
    <div class="f5 flex flex-row flex-wrap items-center justify-around pa2">
      <div v-for="subjectName in subjects">
        <a @click="assignSubject({ observationId, subjectName })" class="flex link pa3 mh2 mv3 ba b--gray br3 shadow-3 bg-white">
          {{ subjectName }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapActions } from 'vuex'
import { getSubjectsForLocation } from '@/utils/getEthogramData'
import { getLocationIdForObservationId } from '@/utils/getObservationData'

export default Vue.component('child', {
  name: 'animals',
  props: ['observationId'],
  computed: {
    subjects () {
      const locationId = getLocationIdForObservationId(this.$store.state.observations, this.observationId)
      return getSubjectsForLocation(this.$store.state.ethograms, locationId)
    }
  },

  methods: {
    ...mapActions('observations', [
      'assignSubject'
    ])
  }
})
</script>
