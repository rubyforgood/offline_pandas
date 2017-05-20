<template>
  <div v-if="data">
    <Animals></Animals>
    <Behaviors></Behaviors>
    <Modifiers></Modifiers>
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
    })
  }
}
</script>
