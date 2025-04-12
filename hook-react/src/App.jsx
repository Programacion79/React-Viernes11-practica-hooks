import UseState from "./components/UseState"
import CambiarColor from "./components/CambiarColor"
import { color } from "./components/CambiarColor"


function App() {

  return (
    <>
    <color.Provider value={"color-oscuro"}>
      <UseState/>
      <CambiarColor/>  
    </color.Provider>
    </>
  )
}

export default App
