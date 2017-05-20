import Vue from 'vue'
import Vuex from 'vuex'

import login from '@/store/login'
import ethograms from '@/store/ethograms'
import observations from '@/store/observations'

Vue.use(Vuex)

export default function configureStore () {
  return new Vuex.Store({
    state: {},
    modules: {
      login,
      ethograms,
      observations
    }
  })
}
