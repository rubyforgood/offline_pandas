<template>
  <div class="bg-washed-blue">
    <div class="pa4 flex flex-row flex-wrap items-center justify-start">
      <div class="flex-auto pa1 tc">Environments</div>
    </div>
    <div class="f5 flex flex-row flex-wrap items-center justify-around pa2">
      <div v-for="location in locations">
        <a @click="chooseLocation(location.id)" class="flex link pa3 mh2 mv3 ba b--gray br3 shadow-3 bg-white">
          {{ location.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'locations',
  computed: {
    ...mapState('ethograms', {
      locations (store) {
        return store.data
      }
    })
  },

  methods: {
    ...mapActions('observations', [
      'createObservation'
    ]),
    chooseLocation (locationId) {
      return this.createObservation(locationId).then((newObservation) => {
        const newObservationId = newObservation.id
        this.$router.push(`observations/${newObservationId}`)
      })
    }
  }
}
</script>
