import SoundFontPlayer from "soundfont-player";
import { AUDIO_CONTEXT } from "../../constants";

const NullSoundFontPlayerNoteAudio = {
  stop: () => {}
}

const NullSoundFontPlayer = {
  play: () =>  NullSoundFontPlayerNoteAudio
}

const AudioPlayer = () => {
  const audioContext = AUDIO_CONTEXT && new AUDIO_CONTEXT()

  let soundPlayer = NullSoundFontPlayer

  return {
    setInstrument: async (instrumentName) => {
      try {
        soundPlayer = await SoundFontPlayer.instrument(audioContext, instrumentName)
      } catch (e) {
        soundPlayer = NullSoundFontPlayer
      }
    },
    playNote: (note) => soundPlayer.play(note)
  }
}

export default AudioPlayer