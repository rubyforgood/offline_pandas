<template>
  <div class="bg-washed-blue">
    <div class="pa4 flex flex-row flex-wrap items-center justify-start">
      <div class="flex-auto pa1 tc">Environments</div>
    </div>
    <div class="f5 flex flex-row flex-wrap items-center justify-around pa2">
      <div v-for="behavior in behaviors">
        <a href="/animals.html" class="flex link pa3 mh2 mv3 ba b--gray br3 shadow-3 bg-white">
          {{ behavior }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getBehaviorNamesForLocation } from '@/utils/getEthogramData'

export default {
  name: 'locations',
  computed: {
    ...mapState('ethograms', {
      behaviors (store) {
        return getBehaviorNamesForLocation(store, 123)
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
