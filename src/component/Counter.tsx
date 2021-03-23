import React, { useState, useEffect } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect wurde ausgeführt");
    document.title = `Count is ${count}`;
  }, [count]);

  useEffect(() => {
    console.log("Wird ausgeführt 'beim mounten'");
  }, []);

  console.log("Count was written to title");
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
