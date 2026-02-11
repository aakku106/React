import { Four } from "./components/Four"

function App() {

  const clearInterval = () => { }

  return (
    <>
      <Four />
      <button onClick={
        () => clearInterval
      } >StopInterval</button>
    </>
  )
}

export default App
