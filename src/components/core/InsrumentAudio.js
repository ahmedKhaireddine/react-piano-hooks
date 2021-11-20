import { useContext, useEffect, useState } from "react"
import AudioPlayer from "./AudioPlayer"
import { NoteContext } from "../../contexts/Note"

const InsrumentAudio = () => {
  const [instrumentPlayer, setInstrumentPlayer] = useState(null)
  const { instrumentName, state:{ notePlaying } } = useContext(NoteContext)

  useEffect(() => {
    setInstrumentPlayer(AudioPlayer())
  }, [])

  useEffect(() => {
    if (instrumentPlayer) {
      instrumentPlayer.setInstrument(instrumentName)
    }
  }, [instrumentPlayer, instrumentName])

  useEffect(() => {
    if (notePlaying !== "" && instrumentPlayer) {
      instrumentPlayer.playNote(notePlaying)
    }
  }, [instrumentPlayer, notePlaying])

  return null
}

export default InsrumentAudio