import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default function configureStore () {
  return new Vuex.Store({
    state: {},
  })
}
