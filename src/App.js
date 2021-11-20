import { NoteContextProvider } from "./contexts/Note"
import Piano from "./components/Piano"

const App = () => {
  return (
    <NoteContextProvider>
      <Piano/>
    </NoteContextProvider>
  )
}

export default App
