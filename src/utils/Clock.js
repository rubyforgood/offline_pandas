export default class Clock {
  constructor () {
    this.intervals = {}
  }

  repeat ({ key, method, interval }) {
    this.intervals[key] = window.setInterval(method, interval)
  }

  stop ({ key }) {
    window.clearInterval(this.intervals[key])
  }
}
