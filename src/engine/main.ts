class Engine implements RenderEngine {
  render (state: RootState) {
    const s = JSON.stringify(state, null, '\t')
    const el: HTMLElement = document.getElementById('root')!!
    el.innerHTML = s
  }
}

export default new Engine()
