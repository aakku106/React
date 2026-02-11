import { useEffect, useState } from "react";

export const Three = () => {

  const [num, setNum] = useState<number>(0)

  useEffect(() => {
    console.log('Runs after every render');
    // No dependency array = runs every time
  });
  useEffect(() => {
    console.log('Runs only with 1st render');
    // Empty dependency array = runs only once(1st render of component)
  }, []);

  return (

    <div>
      <button onClick={() => { setNum((p) => p + 1) }} >click me</button>
      <h1>{num}</h1>
    </div>
  )
}
/*
 * The render here means when browser paints not actual react reder
 * */
