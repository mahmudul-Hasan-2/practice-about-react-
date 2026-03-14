import React, { useState } from "react";

export function SmartCounter () {
  
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  }

  const handleDecrease = () => {
    setCount(count - 1);
  }

  const handleReset = () => {
    setCount(0);
  }
  
  return (
    <div>
      <h3>Count: {count}</h3>

      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease} disabled={count === 0}>Decrease</button>
      <button onClick={handleReset} disabled={count === 0}>Reset</button>
    </div>
  )
}