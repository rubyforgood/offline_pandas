export default class FakeNetworkStatus {
  constructor () {
    this.onlineStatus = true
    this.onOnlineFunctions = []
    this.onOfflineFunctions = []
  }

  isOnline () {
    return this.onlineStatus
  }

  onOnline (f) {
    this.onOnlineFunctions.push(f)
  }

  onOffline (f) {
    this.onOfflineFunctions.push(f)
  }

  makeOnline () {
    this.onlineStatus = true
    this.onOnlineFunctions.forEach(f => f())
  }

  makeOffline () {
    this.onlineStatus = false
    this.onOfflineFunctions.forEach(f => f())
  }
}
