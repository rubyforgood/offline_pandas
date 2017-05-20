import Vue from 'vue'
import Vuex from 'vuex'

import login from '@/store/login'
import ethograms from '@/store/ethograms'
<<<<<<< Updated upstream
import observations from '@/store/observations'
=======
import ethogramRehydrator from '@/utils/ethogramRehydrator'
>>>>>>> Stashed changes

Vue.use(Vuex)

export default function configureStore ({ networkStatus }) {
  return new Vuex.Store({
    state: {},
    modules: {
      login,
<<<<<<< Updated upstream
      ethograms,
      observations
    }
=======
      ethograms
    },
    plugins: [ethogramRehydrator()]
>>>>>>> Stashed changes
  })
}
