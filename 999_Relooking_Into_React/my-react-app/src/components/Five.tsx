import { useEffect, useState } from "react"

export const Five = () => {
  const [data, setData] = useState("")
  const [holdData, setHoldData] = useState("")

  // Get Data
  useEffect(() => {
    const saved = localStorage.getItem("FiveTestData")
    console.log("dataFetched")
    if (saved) setData(JSON.parse(saved))
  }, [])

  useEffect(() => {
    if (data) localStorage.setItem("FiveTestData", JSON.stringify(data))
  }, [data])

  const saveData = () => {
    setData(holdData)
  }

  return (
    <>
      <h1>Data stored: {data}</h1>
      <div>
        <input type="text" onChange={(e) => { setHoldData(e.target.value) }} />
        <button onClick={() => { saveData() }} >SAVE</button>
      </div>
    </>
  )
}

