import _ from 'lodash'
import char from '../../../data/character.json'

const moduleName = 'player'
const playerStore = {
  data: { level: 0 }
}

function updateStore () {

}

function getData () {
  return playerStore.data
}

function merge (old, payload) {
  const strategy = {
    level: ['val'],
    exp: ['val'],
    hp: ['val', 'max'],
    stamina: ['val', 'max'],
  }
  const result = _.cloneDeep(old)
  for (const key of Object.keys(strategy)) {
    if (payload[key]) {
      const fields = strategy[key]
      for (const field of fields) {
        if (payload[key][field] !== undefined) result[key][field] = payload[key][field]
      }
    }
  }
  return result
}

function init () {
  const template = _.cloneDeep(char.player)
  return template
}

function create (store) {
  playerStore.data = init()
  if (store && store[moduleName]) playerStore.data = merge(playerStore.data, store[moduleName])
  return getData()
}

function update (store) {
  updateStore(store)
  return getData()
}

export default {
  create,
  update
}
