import { useState } from "react";
import { Four } from "./components/Four"

const App = () => {

  let [toShow, setTOShow] = useState<boolean>(true);
  const clearInterval = () => {
    setTOShow((p) => !p)
    console.log(toShow)
  }

  return (
    <>

      {
        toShow && <Four />
      }

      <button onClick={
        () => clearInterval()
      } >StopInterval</button>
    </>
  )
}

export default App
