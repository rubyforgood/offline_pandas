<template>
  <div class="bg-washed-blue">
    <div class="pa4 flex flex-row flex-wrap items-center justify-start">
      <div class="flex-auto pa1 tc">Modifiers</div>
    </div>
    <div class="f5 flex flex-row flex-wrap items-center justify-around pa2">
      <div v-for="modifier in modifiers">
        <a href="/animals.html" class="flex link pa3 mh2 mv3 ba b--gray br3 shadow-3 bg-white">
          {{ modifier }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getModifiersFor } from '@/utils/getEthogramData'

export default {
  name: 'locations',
  computed: {
    ...mapState('ethograms', {
      modifiers (store) {
        return getModifiersFor(store, 123, 'walking')
      }
    })
  },
  methods: {
    onAlertMe (e) {
      alert('hi')
    }
  }
}
</script>
