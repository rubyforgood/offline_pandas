<template>
  <div v-if="data">
    <div v-if="onAnimalStep">
      <Animals :observation-id="observationId"></Animals>
    </div>
    <div v-if="onBehaviorStep">
      <Behaviors :observation-id="observationId"></Behaviors>
    </div>
    <div v-if="onModifierStep">
      <Modifiers :observation-id="observationId"></Modifiers>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Animals from './Animals.vue'
import Behaviors from './Behaviors.vue'
import Modifiers from './Modifiers.vue'

export default {
  name: 'observations',
  components: {
    Animals,
    Behaviors,
    Modifiers
  },
  computed: {
    ...mapState('ethograms', {
      data: 'data'
    }),
    observationId () {
      return parseInt(this.$router.currentRoute.params.id)
    },
    onAnimalStep () {
      return Boolean(!this.animalIsSelected)
    },
    onBehaviorStep () {
      return Boolean(this.animalIsSelected && !this.behaviorIsSelected)
    },
    onModifierStep () {
      return Boolean(this.behaviorIsSelected && !this.modifierIsSelected)
    },
    animalIsSelected () {
      return Boolean(this.$store.state.observations.data[this.observationId].subject)
    },
    behaviorIsSelected () {
      return Boolean(this.$store.state.observations.data[this.observationId].actionName)
    },
    modifierIsSelected () {
      return Boolean(this.$store.state.observations.data[this.observationId].modifierName)
    }
  }
}
</script>
