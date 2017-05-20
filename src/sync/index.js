import runSync from '@/sync/runSync'

export default class ServerSyncRunner {
  constructor ({ clock, networkStatus }) {
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
      method: runSync,
      interval: 5000
    })
  }

  stop () {
    this.clock.stop({ key: 'serverSync' })
  }
}
