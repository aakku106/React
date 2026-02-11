import { useEffect, useState } from "react";

export const Three = () => {

  const [num, setNum] = useState<number>(0)
  const [num2, setNum2] = useState<number>(0)

  useEffect(() => {
    console.log('Runs after every render');
    // No dependency array = runs every time
  });
  useEffect(() => {
    console.log('Runs only with 1st render or on mount');
    // Empty dependency array = runs only once(1st render of component or when components mounts)
  }, []);
  useEffect(() => {
    console.log('num changed:', num);
    // Runs only when 'num' changes
  }, [num]);
  useEffect(() => {
    console.log('num2 changed:', num2);
    // Runs only when 'num2' changes
  }, [num2]);
  useEffect(() => {
    console.log('num2 & num changed:', num2, num);
    // Runs  when 'num2' & 'num' changes
  }, [num2, num]);
  return (

    <div>
      <button onClick={() => { setNum((p) => p + 1) }} >click me</button>
      <button onClick={() => { setNum2((p) => p + 1) }} >click me2</button>
      <h1>{num}</h1>
      <h1>{num2}</h1>
    </div>
  )
}
/*
 * The render here means when browser paints not actual react reder
 * */
