import { useState } from "react";
export const State = () => {
    const [count, setCount] = useState(0);
    const handleButtonClick = () => {
        setCount(() => count + 1);
        setCount(() => count + 2);

        console.log(count);
    };
  return (
    <>
      <h1>State Management in React = {count}</h1>
      <button onClick={handleButtonClick}>Increment</button>
    </>
  );
};