import meta from './module/meta'
import world from './module/world'
import player from './module/chars/player'
import room from './module/room'
import system from './system'

const modules = {
  meta,
  world,
  player,
  room
}

class Game {
  constructor ({ initialState }) {
    this.init(initialState)
  }

  init (initialState) {
    this.lastUpdateTime = Date.now()
    this.tickTime = 1 * 1000 // ms
    this.store = system.inject({
      meta: meta.create(initialState),
      world: world.create(initialState),
      player: player.create(initialState),
      room: room.create(initialState),
      state: {},
      system: {}
    })
    this.subscriber = []
    this.subscribeKeys = Object.keys(modules).concat(['system', 'state'])
  }

  getStore (key) {
    return this.store[key]
  }

  subscribe (fn) {
    this.subscriber.push(fn)
    this.subscribeKeys.forEach(key => {
      fn(key, this.getStore(key))
    })
  }

  broadcast (keys = this.subscribeKeys) {
    keys.forEach(key => {
      this.subscriber.forEach(fn => fn(key, this.getStore(key)))
    })
  }

  update () {
    const updateTime = Date.now()
    for (const key in modules) {
      this.store[key] = modules[key].update(this.store, updateTime)
    }
    system.update(this)
    this.lastUpdateTime = updateTime
  }

  async callEvent (payload) {
    system.handle(payload, this)
    return await this.nextTick(1)
  }

  async nextTick (tick) {
    const now = Date.now()
    const count = tick || Math.floor((now - this.lastUpdateTime) / this.tickTime)
    for (let index = 0; index < count; index++) {
      this.update()
    }
    if (count > 0) this.broadcast()
    return this.store
  }
}

export default Game
