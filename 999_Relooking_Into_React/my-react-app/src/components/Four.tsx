import { useEffect, useState } from "react"

export const Four = () => {
  const [seconds, setSeconds] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    console.log("Second: ", seconds)
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {seconds}
    </div>
  )
}
