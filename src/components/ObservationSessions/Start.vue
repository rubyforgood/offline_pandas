<template>
  <div>
    <h2>Start Observation Session</h2>
    <button v-for='(ethogram, key) in ethograms'
            :key='key'>
      {{ ethogram.name }}
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'observation-sessions-start',
  computed: {
    ...mapState('ethograms', {
      ethograms: 'data'
    })
  },
  methods: {
    ...mapActions('ethograms', ['fetchAll'])
  }
}
</script>
