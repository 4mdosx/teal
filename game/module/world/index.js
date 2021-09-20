const moduleName = 'world'
const state = {
  environment: "wasteland",
  era: "pale",
  loopEnd: ""
}

function create (store) {
  if (store && store[moduleName]) {
    return store[moduleName]
  } else {
    const result = Object.assign({}, state)
    result.loopEnd = new Date(Date.now() + 24 * 60 * 60 * 1000 * 7)
    return result
  }
}

function update (store) {
  const data = store[moduleName]
  return { ...data }
}

export default {
  create,
  update
}