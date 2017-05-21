// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import configureStore from './store'
import ServerSyncRunner from './sync'
import {
  locallyStoredObservations,
  clearLocallyStoredObservations
} from './utils/observationPersistence'
import FakeNetworkStatus from './utils/FakeNetworkStatus'
import Clock from './utils/Clock'
import NetworkStatusPlugin from './utils/NetworkStatusPlugin'

Vue.config.productionTip = false

const clock = new Clock()
const networkStatus = new FakeNetworkStatus()
Vue.use(NetworkStatusPlugin, { networkStatus })

const store = configureStore()

const serverSync = new ServerSyncRunner({ clock, networkStatus })
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
window.clearLocallyStoredObservations = clearLocallyStoredObservations
window.networkStatus = networkStatus
