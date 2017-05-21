<template>
  <div class="bg-washed-blue">
    <div class="pa4 flex flex-row flex-wrap items-center justify-start">
      <div class="flex-auto pa1 tc">Review</div>
    </div>
    <div class="f5 flex flex-row flex-wrap items-center justify-around pa2">
      <a @click="restart({ observationId })" class="flex link pa3 mh2 mv3 ba b--gray br3 shadow-3 bg-white">
        Start Over
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'conclusion',
  props: ['observationId'],
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
