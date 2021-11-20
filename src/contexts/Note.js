import { createContext, useState } from "react"
import { formatedNotes } from "../utils/note"

const NoteContext = createContext({})

const NoteContextProvider = (props) => {
  const [state, setState] = useState({
    notes: formatedNotes(),
    notePlaying: ""
  })

  const value = {
    instrumentName : "acoustic_grand_piano",
    state,
    setState
  }

  return (
    <NoteContext.Provider value={value}>
      {props.children}
    </NoteContext.Provider>
  )
}

export {
  NoteContext,
  NoteContextProvider
}