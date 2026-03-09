import { useEffect, useState } from "react"

export const Five = () => {
  const [data, setData] = useState("")

  // Get Data
  useEffect(() => {
    const saved = localStorage.getItem("FiveTestData")
    if (saved) setData(JSON.parse(saved))
  }, [])
  // Set Data
  useEffect(() => {
    localStorage.setItem("FiveTestData", JSON.stringify(data))
  }, [data])

  return (
    <>
      <h1>Data stored: {data}</h1>
      <div>
        <input type="text" />
      </div>
    </>
  )
}

