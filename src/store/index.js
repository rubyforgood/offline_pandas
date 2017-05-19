import Vue from 'vue'
import Vuex from 'vuex'

import helloMessages from '@/store/helloMessages'

Vue.use(Vuex)

export default function configureStore () {
  return new Vuex.Store({
    state: {},
    modules: { helloMessages }
  })
}
