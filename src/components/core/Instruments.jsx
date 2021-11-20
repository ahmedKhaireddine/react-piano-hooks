import React, { useCallback, useContext } from "react"
import { NoteContext } from "../../contexts/Note"
import Note from "./Note"
import InstrumentAudio from "./InsrumentAudio"
import { editClickedNote } from "../../utils/note"
import "./Instruments.css"

const Instruments = () => {
  const { state, setState } = useContext(NoteContext)

  const handleClickedNote = useCallback((bool, note) => {
    const notes = editClickedNote(state.notes, bool, "note", note)

    setState({
      notePlaying: bool ? note : "",
      notes
    })
  }, [state, setState])

  const handleMouseDown = useCallback((note) => {
    handleClickedNote(true, note)
  }, [handleClickedNote])

  const handleMouseUp = useCallback((note) => {
    handleClickedNote(false, note)
  }, [handleClickedNote])

  const notesItemsJsx = state.notes.map((element, index) => {
    return <Note
      key={index}
      index={index}
      element={element}
      handleMouseDown={handleMouseDown}
      handleMouseUp={handleMouseUp}
    />
  })

  return (
    <>
      <div className="keyboard-holder">
        {notesItemsJsx}
      </div>
      <InstrumentAudio />
    </>
  )
}

export default Instruments