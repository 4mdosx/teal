
export default class Ticker {
  lastTick: number = 0
  tickLength: number = 100
  stopTickFlag?: number

  start() {
    const now = Date.now()
    this.lastTick = now
    this.tick(now)
  }

  stop() {
    this.stopTickFlag && clearTimeout(this.stopTickFlag)
  }

  tick = (tFrame = Date.now()) => {
    this.stopTickFlag = setTimeout(this.tick, this.tickLength)
    const nextTick = this.lastTick + this.tickLength
    let numTicks = 0
    if (tFrame > nextTick) {
      var timeSinceTick = tFrame - this.lastTick
      numTicks = Math.floor(timeSinceTick / this.tickLength)
    }

    if (numTicks) this.queueUpdates(numTicks)
  }

  queueUpdates(numTicks: number) {
    for (var i = 0; i < numTicks; i++) {
      this.lastTick = this.lastTick + this.tickLength
      // update state
    }
  }
}
