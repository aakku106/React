import { useState } from "react"
import { Two } from "./components/Two"

function App() {

  const [wee, setWee] = useState(["ccn", "cat"])
  const laa = () => {
    setWee([
      "lamooooooo"])
  }
  return (
    <>
      <Two />
      {wee}
      <br />
      <button onClick={laa} >weeeeeeeeeeeeeeeeeeeeeeeeeeee </button>
      <br />
    </>
  )
}

export default App
