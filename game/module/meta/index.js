import Meta from '../../../data/meta.json'

const moduleName = 'meta'
function create (store) {
  if (store && store[moduleName]) {
    return store[moduleName]
  } else {
    const result = Object.assign({}, Meta)
    result.time = Date.now()
    return result
  }
}

function update (store, now) {
  const data = store[moduleName]
  return { ...data, time: now }
}

export default {
  create,
  update
}