import { useEffect, useState } from "react"


export default function App() {
  const [count, setCount]= useState(0);
  const [message, setMessage] = useState("");
  

   useEffect(() => {
    if(count === 10){
      alert("🎉 You reached 10!")
    }
    if (count === -5){
      alert("⚠️ Too low!")
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
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
    <div className="bg-white p-6 rounded-2xl shadow-xl text-center w-80 space-y-6">
    <h1 className="text-5xl font-bold">
      {count}</h1>
    <div className="flex justify-center gap-4">
    <button className="px-4 py-2 bg-red-500 text-white rounded"
    onClick={() => setCount(count - 1)}
    >-</button>
    <button className="px-4 py-2 bg-gray-500 text-white rounded" 
    onClick={() => setCount(0)}
    >Reset</button>
    <button className="px-4 py-2 bg-green-500 text-white rounded"
     onClick={() => setCount(count + 1)}
     >+</button>
    </div>
    <p className="text-gray-600">{message}</p>
    </div>  
    </div>
  )
}
