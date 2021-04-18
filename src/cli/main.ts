import './loadEnv'
import readline from 'readline'
import * as Timer from './timer'
import * as Dice from './dice'
import { createStore } from '../store/main'
import { argvToAction } from '../utils/main'
import * as gameSaveUtils from '../utils/gameSave'

let store: any
createStore().then(s => store = s)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '0v0: ',
})

rl.prompt()

rl.on('line', (line) => {
  const [cmd, ...args] = line.trim().split(' ')
  switch (cmd) {
    case 'state':
      console.log(store.state)
      break
    case 'dispatch':
      const action = argvToAction(line.trim())
      if (!action) {
        console.log('invalid dispatch action')
        break
      }
      store.dispatch(action)
      console.log(store.state)
      break
    case 'roll':
      console.log(Dice.roll(args[0] || 'd20'))
      break
    case 'timer':
      const time = isNaN(Number(args[0])) ? 45 : Number(args[0])
      Timer.start(time, args[1] || `${time} minutes timer end`)
      break
    default:
      console.log(`??? cmd: '${cmd}'`)
      break
  }
  rl.prompt()
}).on('close', () => {
  gameSaveUtils.save(store.state)
  console.log('Have a great day!')
  process.exit(0)
})
