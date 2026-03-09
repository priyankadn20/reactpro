import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // browser tab title update
    console.log('useEffect run → document title updated');
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <h2>Counter App</h2>
      <p>You clicked {count} times</p>

      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default Counter;
