declare interface StateStore {
  update () : void
  getState (): RootState
}

declare interface RootState {
  time: number
}

declare interface RenderEngine {
  render (state: RootState) : void
}
