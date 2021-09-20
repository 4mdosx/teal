import resources from '../../../data/resources.json'

const moduleName = 'room'
function create (store) {
  if (store && store[moduleName]) {
    return store[moduleName]
  } else {
    const coin = resources.find(r => r.id === 'coin')
    return { resources: { coin: { ...coin, val: 0 } }}
  }
}

function update (store) {
  const data = store[moduleName]
  return data
}

export default {
  create,
  update
}
