import Engine from '../engine/main'

const initState = (): RootState => {
  return {
    time: 0
  }
}

export default class Store implements StateStore {
  private state: RootState = initState()
  getState () {
    return this.state
  }
  update () {
    this.state.time = Date.now()
  }
}
