import React, { useState } from "react"

export const Two = () => {
  const [name, setName] = useState<string>("")
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  return (
    <>
      <div>
        <input type="text" placeholder="Enter Ur Name" value={name} onChange={handleChange} />
      </div>
      <div style={{ display: "flex", gap: "1rem", textAlign: "center" }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <TwoPointOne key={i} name={name} />
        ))}
      </div>
      <div style={{ display: "flex", gap: "1rem", textAlign: "center" }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <TwoPointOne key={i} name={name} />
        ))}
      </div>

      <div style={{ display: "flex", gap: "1rem", textAlign: "center" }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <TwoPointOne key={i} name={name} />
        ))}
      </div>
      <div style={{ display: "flex", gap: "1rem", textAlign: "center" }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <TwoPointOne key={i} name={name} />
        ))}
      </div>
      <div style={{ display: "flex", gap: "1rem", textAlign: "center" }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <TwoPointOne key={i} name={name} />
        ))}
      </div>

      <div style={{ display: "flex", gap: "1rem", textAlign: "center" }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <TwoPointOne key={i} name={name} />
        ))}
      </div>

    </>
  )
}
type TwoPointOneProps = {
  name: string
}

const TwoPointOne = ({ name }: TwoPointOneProps) => {
  return (
    <h1> {name} </h1>)
}


/*
 * Here simpally what we did was called multiple child(TwoPointTwo) components from parent(Two) component
 * Only thing Different from normal Js is that we gace type to props
 * */
