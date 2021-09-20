import _ from 'lodash'
import tasks from '../../data/tasks.json'
import resources from '../../data/resources.json'

function handle(eventPayload, game) {
  const { name, ...payload } = eventPayload
  switch (name) {
    case 'START_TASK': {
      const config = tasks.find(t => t.id === payload.id)
      game.store.state.task = {
        id: payload.id,
        end_at: Date.now() + config.length * 60 * 1000,
      }
      if (config.cost) {
        for (const [key, value] of Object.entries(config.cost)) {
          if (game.store.room.resources[key]) {
            game.store.room.resources[key] -= value
          } else {
            game.store.player[key].val -= value
          }
        }
      }
      break
    }
    case 'COMPLETE_TASK': {
      const id = game.store.state.task.id
      const config = tasks.find(t => t.id === id)
      delete game.store.state.task
      if (config.result) {
        for (const [key, value] of Object.entries(config.result)) {
          if (game.store.player[key]) {
            game.store.player[key] += value
          } else {
            const target = game.store.room.resources[key]
            if (target) {
              target.val += value
            } else {
              const resource = resources.find(r => r.id === key)
              if (resource) {
                game.store.room.resources[key] = _.cloneDeep(resource)
                game.store.room.resources[key].val = value
              }
            }
          }
        }
      }
      break
    }
    case 'CANCEL_TASK':
      if (game.store.state.task) delete game.store.state.task
      break
    default:
      break
  }
}

function update(game) {
  if (game.store.state.task) {
    if (Date.now() > game.store.state.task.end_at) game.callEvent({ name: 'COMPLETE_TASK' })
  }
}

function inject (store) {
  store.system.tasks = _.cloneDeep(tasks)
  return store
}

export default {
  inject,
  handle,
  update
}