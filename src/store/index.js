import Vue from 'vue'
import Vuex from 'vuex'

import login from '@/store/login'

Vue.use(Vuex)

export default function configureStore () {
  return new Vuex.Store({
    state: {},
    modules: { login }
  })
}
