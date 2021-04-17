import fs from 'fs'
import path from 'path'

export const load = async (): Promise<any> => {
  try {
    const dirPath = path.resolve('./archives')
    const files = fs.readdirSync(dirPath)
    const filename = files.sort()[0]
    const filePath = path.resolve(dirPath, filename)
    const text = fs.readFileSync(filePath).toString()
    return JSON.parse(text)
  } catch (error) {
    return null
  }
}

export const save = async (gameState) => {
  const filePath = path.resolve('./archives', 'data')
  fs.writeFileSync(filePath, JSON.stringify(gameState))
}
