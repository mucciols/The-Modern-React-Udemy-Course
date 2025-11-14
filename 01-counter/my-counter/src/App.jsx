import { useState } from "react"
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const subtractFromCount = () => {
    setCount(count-1);
  }

  const addToCount = () => {
    setCount(count + 1)
  }

  return (
    <div>
     <h4>The Current</h4>
     <h1 >{count}</h1>
     <button onClick={subtractFromCount}>-</button>
     <button onClick={addToCount}>+</button>
    </div>
  )
}

export default App
