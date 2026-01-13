import { useState } from "react"

export const One = () => {
  const [name, setName] = useState("___")
  const [title, setTitle] = useState("")
  return (
    <div>
      <h1>{title}</h1>
      <h2>Welcome to page {name} </h2>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <input type="submit" onClick={() => { setTitle(name) }} />
    </div>
  )
}
/*
 *I have imported this in umm app.tsx normally and upon clalling it multiple time
 * we see multiple un-related component which was intended and this is how react works,
 * wot if you want change 1nce and it updates everywhere, lest do that in Tow.tsx
 */
// But before that lest re-write this One function/component in Ts style insted of Js style in OnePointOne


export const OnePointOne = () => {
  const [name, setName] = useState<string>("")
  const [title, setTitle] = useState<string>("")

  const handleClick = () => {
    setTitle(name)
  }
  return (
    <div>
      <h1>{title}</h1>
      <h2>{name}</h2>
      <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
      <button onClick={handleClick} >SUBMIT</button>
    </div>
  )
}
/*
 * I gave only one type in 2 place ie. name and title, but it dosent mean uses can't enter numbers, it
 * Juat mean everything users input from input tag is a string 
 * or name and title is type string
 * (althow anything entered through input tag is already string)
 * One more thign i had put value = {name} in 1.1 but it wasrn't in 1
 * One more Ts thing you could do see 1.2
 * */
export const OnePointTwo = () => {
  const [name, setName] = useState<string>("")
  const [title, setTitle] = useState<string>("")
  const handleClick = () => { setTitle(name) }
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value) }
  return (
    <div>
      <h1>{title}</h1>
      <h2>{name}</h2>
      <input type="text" value={name} onChange={handleInput} />
      <button onClick={handleClick} >SUBMIT</button>
    </div>)
}
// NEXT: look at ./Two.tsx
