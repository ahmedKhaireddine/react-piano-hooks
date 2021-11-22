import React, { useEffect, useCallback, useContext } from "react"
import { NoteContext } from "../contexts/Note"
import { isKeyUsed, isModifierKeyClicked } from "../utils/key"
import { editClickedNote, findNote } from "../utils/note"
import Instrument from "./core/Instruments"
import Video from "./core/Video";
import mov from "../assets/videos/fog.mov"
import "./Piano.css"

const Piano = () => {
  const { state, setState } = useContext(NoteContext)

  const handleWindowClickedNote = useCallback((key, bool) => {
    const keyUpperCase = key.toUpperCase()
    if (isKeyUsed(keyUpperCase)) {
      const notes = editClickedNote(state.notes, bool, "key", keyUpperCase)

      const notePlaying = bool ? findNote(notes, "key", keyUpperCase).note : ""

      setState({ notePlaying, notes })
    }
  }, [state, setState])

  const handleWindowKeyDown = useCallback((e) => {
    if (isModifierKeyClicked(e) && !e.repeat) {
      handleWindowClickedNote(e.key, true)
    }
  }, [handleWindowClickedNote])

  const handleWindowKeyUp = useCallback((e) => {
    if (isModifierKeyClicked(e) && !e.repeat) {
      handleWindowClickedNote(e.key, false)
    }
  }, [handleWindowClickedNote])

  useEffect(() => {
    window.addEventListener("keydown", handleWindowKeyDown)
    window.addEventListener("keyup", handleWindowKeyUp)

    return () => {
      window.removeEventListener("keyup", handleWindowKeyUp)
      window.removeEventListener("keydown", handleWindowKeyDown)
    }
  }, [handleWindowKeyDown, handleWindowKeyUp])

  return (
    <div className="wrapper">
      <Video
        className="full-screen"
        source={mov}
        type="video/mp4"
      />
      <div className="header-container">
        <h1>Use your keyboard <br/> for playing</h1>
        <div className="bg-image"></div>
      </div>
      <Instrument />
    </div>
  )
}

export default Piano