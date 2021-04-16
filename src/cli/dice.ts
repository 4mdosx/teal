import { funkydice } from 'funkydice'
import { InterfaceResult } from 'funkydice/dist/roll'

const format = (row: InterfaceResult) => {
  return `${row.total} [${row.rolls.map(r => r.result).join(', ')}]`
}

export const roll = (d20cmd: string) => {
  const amount = d20cmd.split('d')[0]
  if (!amount) d20cmd = '1' + d20cmd

  const result = funkydice(d20cmd)
  return `${d20cmd} \n::${result.map(r => format(r)).join('\n')}`
}
