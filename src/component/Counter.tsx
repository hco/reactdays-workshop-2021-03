import React, { useState, useEffect } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count is ${count}`;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
