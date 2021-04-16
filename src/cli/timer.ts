import notifier from 'node-notifier'

let activeTimer: Timer[] = []
let intervalFlag: NodeJS.Timeout

class Timer {
  constructor (public endTime: number, public message: string) {
    this.endTime = endTime
    this.message = message
  }
}

const checkEndTimter = () => {
  const now = Date.now()
  activeTimer = activeTimer.filter(timer => {
    if (timer.endTime < now) {
      notifier.notify({
        title: 'loop alert',
        message: timer.message
      })
    }
    return timer.endTime > now
  })
  if (activeTimer.length === 0) clearInterval(intervalFlag)
}

export const start = (time: number, message: string) => {
  activeTimer.push(new Timer(Date.now() + time * 60 * 1000, message))
  intervalFlag = setInterval(checkEndTimter, 1000)
}

export const clear = () => {
  activeTimer = []
  clearInterval(intervalFlag)
}
