import { useState } from "react";

function Count() {
  let [count, setCount] = useState(1);
  return (
    <div className="counter">
      <button
        className="min"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <span>{count < 1 ? setCount(1) : count}</span>
      <button
        className="max"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Count;
