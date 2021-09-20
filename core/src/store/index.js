import { createStore } from 'vuex'
import Game from '../../../game/main'

const store = createStore({
  state () {
    return {
      game: null,
      gameIntr: null
    }
  },
  mutations: {
    update (state, payload) {
      const [key, value] = payload
      state[key] = value
    }
  },
  actions: {
    init ({ state, commit }) {
      const data = JSON.parse(window.localStorage.getItem('gameData')) || null
      const game = new Game({ initialState: data })
      game.subscribe((key, value) => { commit('update', [key, value]) })
      state.game = game
      window.loopGame = game
    },
    async runGame ({ state }) {
      await state.game.nextTick(1)
      state.gameIntr = setInterval(() => state.game.nextTick(), 1000)
    },
    stopGame (ctx) {
      clearInterval(ctx.state.gameIntr)
    },
    save (ctx) {
      const payload = ctx.state.game.store
      console.info(JSON.parse(JSON.stringify(payload)))
      window.localStorage.setItem('gameData', JSON.stringify(payload))
      return Date.now()
    },
    clear (ctx) {
      clearInterval(ctx.state.gameIntr)
    }
  }
})

export default store
