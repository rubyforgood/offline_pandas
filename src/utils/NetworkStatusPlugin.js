export default {
  install (Vue, { networkStatus }) {
    Vue.prototype.$networkStatus = networkStatus
  }
}
