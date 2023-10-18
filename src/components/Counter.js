import React from 'react'
import { useState } from 'react';

export default function Counter() {
    const [Counter, setCounter] = useState(0);
    const handleClick1 =()=>{
        setCounter(Counter + 1);

    }

    const handleClick2 =()=>{
        setCounter(Counter - 1);

    }
  return (
    <div>
        <h1>Counter App</h1>
        <button onClick={handleClick1}>Increament</button>
        <div style={{fontSize:50}}>{Counter}</div>
        <button onClick={handleClick2}>Decreament</button>

        {/* call back function */}
        <button onClick={() => setCounter (Counter + 1)}>Increament1</button>   

        
       </div>
  )
}
