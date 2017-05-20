import Clock from '@/utils/Clock'
import FakeNetworkStatus from '@/utils/FakeNetworkStatus'

export default class ServerSyncRunner {
  constructor ({ clock, networkStatus } = defaultServerSyncDependencies()) {
    this.clock = clock
    this.networkStatus = networkStatus
  }

  run () {
    this.networkStatus.onOnline(this.start.bind(this))
    this.networkStatus.onOffline(this.stop.bind(this))

    if (this.networkStatus.isOnline) {
      this.start()
    }
  }

  start () {
    this.clock.repeat({
      key: 'serverSync',
      method: () => { console.log('running sync') },
      interval: 1000
    })
  }

  stop () {
    this.clock.stop({ key: 'serverSync' })
  }
}

function defaultServerSyncDependencies () {
  return {
    clock: new Clock(),
    networkStatus: new FakeNetworkStatus()
  }
}
