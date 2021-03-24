import React, { useState, useEffect } from "react";
function Counter() {
  console.log("Counter rendering starts");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Side Effect is being done");
    document.title = `Count is ${count}`;
  }, [count]);

  const element = (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
    </div>
  );
  console.log("counter rendering finished");
  return element;
}

export default Counter;
