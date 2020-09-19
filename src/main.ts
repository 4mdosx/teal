import World from './world/main'
import Store from './store/main'

const store = new Store()
const GameWorld = new World()

GameWorld.setInitial(store)
GameWorld.start()
