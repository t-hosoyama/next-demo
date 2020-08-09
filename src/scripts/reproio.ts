const isDebug = true

interface IReproIO {
  command: string
  value: string
  options?: string
}

class ReproIO implements IReproIO {
  command = ""
  value = ""
  options = undefined

  constructor(props: IReproIO) {
    Object.assign(this, props)
  }

  apply() {
    window.reproio(this.command, this.value, this.options)
    isDebug && console.log("🌱reproio:", JSON.stringify(this, null, 2))
    return this
  }

  emit(payload?: Record<string, unknown>) {
    const detail = {
      ...this,
      payload
    }
    window.dispatchEvent(new CustomEvent("habits.reproio", { detail }))
    isDebug && console.log("🍙reproio.raise:", JSON.stringify(detail, null, 2))
    return this
  }
}

const reproio = (command: string, value: string, options?: string) => {
  return new ReproIO({ command, value, options }).apply()
}

export default reproio
