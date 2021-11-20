import { KEY_BOARD } from '../constants'

export const isKeyUsed = (key) => {
  return KEY_BOARD.includes(key)
}

export const isModifierKeyClicked = event => {
  return !event.ctrlKey && !event.metaKey && !event.shiftKey
}