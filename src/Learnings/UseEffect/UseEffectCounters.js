import React, { useState, useEffect } from 'react';

function Counters() {
  const [count, setCount] = useState(0);

  // useEffect to update document title
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // Run the effect whenever count changes

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counters;
