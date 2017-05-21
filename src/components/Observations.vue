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
    <div v-if="onSubmitStep">
      <Conclusion :observation-id="observationId"></Conclusion>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Animals from './Animals.vue'
import Behaviors from './Behaviors.vue'
import Modifiers from './Modifiers.vue'
import Conclusion from './Conclusion.vue'

export default {
  name: 'observations',
  components: {
    Animals,
    Behaviors,
    Modifiers,
    Conclusion
  },
  computed: {
    ...mapState('ethograms', {
      data: 'data'
    }),
    observationId () {
      return this.$router.currentRoute.params.id
    },
    observation () {
      return this.$store.state.observations.data[this.observationId]
    },
    ethogram () {
      return this.data[this.observation.locationId]
    },
    currentBehavior () {
      return this.ethogram.behaviors.find(b => b.name === this.observation.actionName)
    },
    hasModifiers () {
      if (this.currentBehavior) {
        return this.currentBehavior.modifiers.length > 0
      } else {
        return null
      }
    },
    onAnimalStep () {
      return Boolean(!this.animalIsSelected)
    },
    onBehaviorStep () {
      return Boolean(this.animalIsSelected && !this.behaviorIsSelected)
    },
    onModifierStep () {
      return Boolean(this.hasModifiers && this.behaviorIsSelected && !this.modifierIsSelected)
    },
    onSubmitStep () {
      return Boolean((this.currentBehavior && !this.hasModifiers) || this.modifierIsSelected)
    },
    animalIsSelected () {
      return Boolean(this.observation.subject)
    },
    behaviorIsSelected () {
      return Boolean(this.observation.actionName)
    },
    modifierIsSelected () {
      return Boolean(this.observation.modifierName)
    }
  }
}
</script>
