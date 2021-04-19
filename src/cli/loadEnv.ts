import fs from 'fs'
import path from 'path'

try {
  const env = fs.readFileSync('./env').toString()
  if (env) {
    const envArr = env.split('\n')
    envArr.forEach(cmd => {
      const [name, value] = cmd.split(' ')
      process.env[name] = value
    })
    console.log('loaded env config -- ' + path.resolve('./env'))
  }
} catch (error) {
  if (!error.message.includes('no such file or directory')) {
    console.log(error.message)
  }
}
