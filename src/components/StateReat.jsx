import React, { useState } from 'react';
function Primitive() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    if (count < 11) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}
export default Primitive;
