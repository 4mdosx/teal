import minimist from 'minimist'

export const argvToAction = (argvString: string) => {
  try {
    const argvObj = minimist(argvString.split(' '))
    if (!argvObj.n) throw new Error('no action name')

    return {
      name: argvObj.n,
      payload: JSON.parse(argvObj.p || null)
    }
  } catch (error) {
    console.error(error)
    return null
  }
}
