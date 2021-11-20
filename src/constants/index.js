export const AUDIO_CONTEXT = window.AudioContext || window.webkitAudioContext
export const OCTAVE_NUMBERS = [1, 2, 3, 4, 5, 6, 7]
export const KEY_BOARD = ["A", "É", "Z", "\"", "E", "R", "(", "T", "§", "Y", "È", "U", "I", "Ç", "O", "À", "P", "<", "Q", "W", "S", "X", "D", "C", "V", "G", "B", "H", "N", ",", "K", ";", "L", ":", "M", "="]
export const TONES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
export const TOUCH_POSITION = [0, 25, 40, 65, 80, 120, 145, 160, 185, 200, 225, 240, 280, 305, 320, 345, 360, 400, 425, 440, 465, 480, 505, 520, 560, 585, 600, 625, 640, 680, 705, 720, 745, 760, 785, 800]

export const NOTES = OCTAVE_NUMBERS.reduce((notes, octaveNumber) => {
  const notesInOctave = TONES.map(tone => `${tone}${octaveNumber}`)
  return [...notes, ...notesInOctave]
}, [])
