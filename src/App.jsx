import { useEffect, useState } from "react"


export default function App() {
  const [count, setCount]= useState(0);
  const [message, setMessage] = useState("");
  const [hasAlerted, setHasAlerted] = useState(false)




  useEffect(() => {
    if(count === 10){
      alert("🎉 You reached 10!")
    }
    if (count === 0){
     setMessage("Start Counting...");
    }
    else if (count > 0){
      setMessage("Positive Number");
    }
    else{
      setMessage("Negative Number");
    }

  }, [count])


  return (
    <div className=''>
    <h1>{count}</h1>
    <button onClick={() => setCount(count - 1)}>-</button>
    <button onClick={() => setCount(0)}>Reset</button>
    <button onClick={() => setCount(count + 1)}>+</button>
    <p>{message}</p>
          
    </div>
  )
}
