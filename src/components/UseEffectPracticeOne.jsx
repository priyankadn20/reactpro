import { useEffect, useState } from 'react';

function IncrementCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setCount(data.length)); 
      console.log(count);
  }, [count]);

  const incrementNumber = () => {
    setCount(count => count + 1);
  };

  return (
    <div>
      <h2>Increment Numbers</h2>
      <p>{`count: ${count}`}</p>
      <button onClick={incrementNumber}>
        Increment
      </button>
    </div>
  );
}

export default IncrementCount;