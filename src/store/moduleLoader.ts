// load file from modules folder
const modules = {
  power: {},
  intelligent: {},
  network: {},
  material: {
    cube: {
      initValue () { return { amount: 0 } },
      reducer ({ prevState, nextState }, action) {
        switch (action.name) {
          case 'CUBE_AMOUNT_CHANGE':
            nextState.material.cube.amount = prevState.material.cube.amount + Number(action.payload)
            break
        }
      },
      mapper ({ state, prevStatus, nextStatus }) {}
    }
  },
  building: {},
  tech: {},
  unit: {},
}

export default {
  init () {
    const state: any = {}
    const reducer = []
    const mapper = []

    // use material module
    const material: any = {}
    Object.entries(modules.material).forEach(([name, module]) => {
      material[name] = module.initValue()
      reducer.push(module.reducer)
      mapper.push(module.mapper)
    })
    state.material = material

    return {
      state, reducer, mapper
    }
  }
}
