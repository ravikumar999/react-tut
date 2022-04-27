
import { useState } from "react";
const Info = () => {
  let [counter, setCounter] = useState(0);

  const increment = () => {
    counter = counter + 1;
    setCounter(counter);
  }

  const decrement = () => {
    counter = counter - 1;
    setCounter(counter)
  }

  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Info;