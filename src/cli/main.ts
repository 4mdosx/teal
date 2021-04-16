import readline from 'readline'
import * as Timer from './timer'
import * as Dice from './dice'
import { stdin } from 'process'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '0v0: ',
})

rl.prompt()

rl.on('line', (line) => {
  const [cmd, ...args] = line.trim().split(' ')
  switch (cmd) {
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
  console.log('Have a great day!')
  process.exit(0)
})
