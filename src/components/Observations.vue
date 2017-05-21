<template>
  <transition name="slide-fade">
    <div v-if="data">
      <transition name="slide-fade">
        <div v-if="onAnimalStep" class="absolute w-100 tc">
          <Animals :observation-id="observationId"></Animals>
        </div>
      </transition>
      <transition name="slide-fade">
        <div v-if="onBehaviorStep" class="absolute w-100 tc">
          <Behaviors :observation-id="observationId"></Behaviors>
        </div>
      </transition>
      <transition name="slide-fade" class="absolute w-100 tc">
        <div v-if="onModifierStep">
          <Modifiers :observation-id="observationId"></Modifiers>
        </div>
      </transition>
      <transition name="slide-fade" class="absolute w-100 tc">
        <div v-if="onSubmitStep">
          <Conclusion :observation-id="observationId"></Conclusion>
        </div>
      </transition>
    </div>
  </transition>
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
      return Boolean((this.hasModifiers && this.behaviorIsSelected) && !this.modifierIsSelected)
    },
    onSubmitStep () {
      return Boolean((!this.hasModifiers && this.behaviorIsSelected) || this.modifierIsSelected)
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

<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
/*.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}*/
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}
.slide-fade-leave {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
