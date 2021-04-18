import notifier from 'node-notifier'

let activeTimer: Timer[] = []
let intervalFlag: NodeJS.Timeout

class Timer {
  constructor (public endTime: number, public message: string, private cb?: Function) {
    this.endTime = endTime
    this.message = message
    this.cb = cb
  }

  done () {
    notifier.notify({
      title: 'loop alert',
      message: this.message
    })
    this.cb && this.cb()
  }
}

const checkEndTimter = () => {
  const now = Date.now()
  activeTimer = activeTimer.filter(timer => {
    if (timer.endTime < now) {
      timer.done()
    }
    return timer.endTime > now
  })
  if (activeTimer.length === 0) clearInterval(intervalFlag)
}

export const start = (time: number, message: string, cb?: Function) => {
  activeTimer.push(new Timer(Date.now() + time * 60 * 1000, message, cb))
  intervalFlag = setInterval(checkEndTimter, 1000)
}

export const clear = () => {
  activeTimer = []
  clearInterval(intervalFlag)
}
