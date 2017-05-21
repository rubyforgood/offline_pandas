<template>
  <div class="conclusion">
    <div class="pa4 flex flex-row flex-wrap items-center justify-start">
      <div class="flex-auto pa1 tc">Observation Summary</div>
    </div>
    <div>
      {{ observation.subject }}
      {{ observation.actionName }}
      {{ observation.modifierName }}
    </div>
    <div class="f5 flex flex-row flex-wrap items-center justify-around pa2">
      <a @click="restart({ observationId })" class="flex link pa3 mh2 mv3 ba b--gray br3 shadow-3 bg-white">
        Save and Start Over
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'conclusion',
  props: ['observationId'],
  computed: {
    observation () {
      return this.$store.state.observations.data[this.observationId]
    }
  },
  methods: {
    ...mapActions('observations', [
      'conclude'
    ]),
    restart (observationId) {
      return this.conclude(observationId).then(() => {
        this.$router.push(`/`)
      })
    }
  }
}
</script>
