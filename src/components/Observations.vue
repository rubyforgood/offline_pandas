<template>
  <div v-if="data">
    <Animals :observation-id="observationId"></Animals>
    <Behaviors :observation-id="observationId"></Behaviors>
    <Modifiers :observation-id="observationId"></Modifiers>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Animals from './Animals.vue'
import Behaviors from './Behaviors.vue'
import Modifiers from './Modifiers.vue'

export default {
  name: 'locations',
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
      return this.$router.currentRoute.params.id
    }
  }
}
</script>
