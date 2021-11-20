import { KEY_BOARD, NOTES, TOUCH_POSITION } from "../constants"


export const editClickedNote = (array, bool, key, value) => {
  return array.map((element) => {
    if (element[key] === value) element.isClicked = bool
    return element
  })
}

const getNotesBetween = (start, end) => {
  return NOTES.slice(
    NOTES.indexOf(start),
    NOTES.indexOf(end) + 1
  )
}

export const formatedNotes = () => {
  const notes = getNotesBetween("C3", "B5")

  return notes.map((note, index) => {
    return {
      className: `${note.match(/[#]/) ? "black" : "white"} key`,
      isClicked: false,
      key: KEY_BOARD[index],
      style: { left : `${TOUCH_POSITION[index]}px`},
      note
    }
  })
}

export const findNote = (array, key, value) => {
  return array.find(element => element[key] === value)
}