
interface Schedule {
  execTime: number
  fn: () => void
}

export default class World {
  lastTick: number = 0
  tickLength: number = 5 * 1000
  stopTickFlag?: NodeJS.Timeout
  tickTask?: () => void
  schedules: Schedule[]

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

    if (numTicks) {
      this.execSchedule(tFrame)
      this.queueUpdates(numTicks)
    }
  }

  execSchedule (now: number) {
    this.schedules = this.schedules.filter(s => {
      if (s.execTime < now) {
        s.fn()
      }
      return s.execTime > now
    })
  }

  queueUpdates(numTicks: number) {
    for (var i = 0; i < numTicks; i++) {
      this.tickTask && this.tickTask()
      this.lastTick = this.lastTick + this.tickLength
    }
  }
}
