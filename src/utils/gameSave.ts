import fs from 'fs'
import path from 'path'

export const load = async (): Promise<any> => {
  try {
    const text = fs.readFileSync(path.resolve('./archives', 'data')).toString()
    return JSON.parse(text)
  } catch (error) {
    return null
  }
}

export const save = async (gameState) => {
  const filePath = path.resolve('./archives', 'data')
  fs.writeFileSync(filePath, JSON.stringify(gameState))
}
