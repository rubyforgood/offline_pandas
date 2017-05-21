import Vue from 'vue'
import Vuex from 'vuex'

import login from '@/store/login'
import ethograms from '@/store/ethograms'
import observations from '@/store/observations'
import ethogramRehydrator from '@/utils/ethogramRehydrator'
import { observationObserver } from '@/utils/observationPersistence'

Vue.use(Vuex)

export default function configureStore () {
  return new Vuex.Store({
    state: {},
    modules: {
      login,
      ethograms,
      observations
    },
    plugins: [ethogramRehydrator(), observationObserver]
  })
}
