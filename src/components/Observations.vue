<template>
  <div>
    <Animals></Animals>
    <Behaviors></Behaviors>
    <Modifiers></Modifiers>
  </div>
</template>

<script>
import Animals from './Animals.vue'
import Behaviors from './Behaviors.vue'
import Modifiers from './Modifiers.vue'

export default {
  name: 'locations',
  components: {
    Animals,
    Behaviors,
    Modifiers
  }
}
</script>
