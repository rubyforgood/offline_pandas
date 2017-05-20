// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import configureStore from './store'
import ServerSyncRunner from './sync'
import {
  locallyStoredObservations,
  putTestDataInStorage,
  clearLocallyStoredObservations
} from './utils/observationPersistence'

Vue.config.productionTip = false

const store = configureStore()
store.dispatch('ethograms/fetchAll')

const serverSync = new ServerSyncRunner()
serverSync.run()

/* eslint-disable no-new */
window.mainVM = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})

window.locallyStoredObservations = locallyStoredObservations
window.putTestDataInStorage = putTestDataInStorage
window.clearLocallyStoredObservations = clearLocallyStoredObservations
