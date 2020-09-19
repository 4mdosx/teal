import engine from '../engine/main'

export default class World {
  lastTick: number = 0
  lastRender: number = 0
  tickLength: number = 100
  stopTickFlag?: number
  private store?: StateStore

  setInitial (store: StateStore) {
    this.store = store
    ;(window as any).cans = this
  }

  start () {
    const now = performance.now()
    this.lastTick = now
    this.lastRender = now
    this.tick(now)
  }

  resume () {
    this.tick(performance.now())
  }

  stop () {
    this.stopTickFlag && window.cancelAnimationFrame(this.stopTickFlag)
  }

  tick: FrameRequestCallback = (tFrame) => {
    this.stopTickFlag = window.requestAnimationFrame(this.tick)
    const nextTick = this.lastTick + this.tickLength
    let numTicks = 0
    if (tFrame > nextTick){
      var timeSinceTick = tFrame - this.lastTick
      numTicks = Math.floor(timeSinceTick / this.tickLength)
    }

    if (nextTick && this.store) {
      this.queueUpdates(numTicks)
      engine.render(this.store.getState())
    }

    this.lastRender = tFrame
  }

  queueUpdates (numTicks: number) {
    for(var i = 0; i <numTicks; i ++){
      this.lastTick = this.lastTick + this.tickLength
      this.store!!.update()
    }
  }
}
