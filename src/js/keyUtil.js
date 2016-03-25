const BACKSPACE = 8

class KeyCode {
  constructor(code) {
    this.code = code
  }

  get isBackspace() {
    return this.code === BACKSPACE
  }
}

export function createKeyCode(code) {
  return new KeyCode(code)
}
