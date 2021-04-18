import fs from 'fs'
import path from 'path'

const loadModules = async (folderPath) => {
  const folderFiles = fs.readdirSync(folderPath)
  const modules = {}
  for await (const fileName of folderFiles) {
    const filePath = path.resolve('.', folderPath, fileName)
    console.log(filePath)
    const module = (await import(filePath)).default
    console.log(module)
    modules[module.name || fileName] = module
  }
  return modules
}

export default {
  async init () {
    const state: any = {}
    const reducer = []
    const mapper = []

    // use material module
    const material: any = {}
    Object.entries<any>(await loadModules('./modules/material')).forEach(([name, module]) => {
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
