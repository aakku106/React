import { useState } from "react";
import { Four } from "./components/Four"

const App = () => {

  let [toShow, setTOShow] = useState<boolean>(true);
  const clearInterval = () => {
    setTOShow((p) => !p)
  }

  return (
    <>
      {
        toShow && <Four />
      }

      <button onClick={
        () => clearInterval()
      } >
        {
          toShow ? "StopInterval" : "StartInterval"
        }

      </button>
    </>
  )
}

export default App
