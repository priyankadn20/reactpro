import React, { useState } from 'react';

function TernaryOperation() {
  const [age, setAge] = useState(0);
  const [message, setMessage] = useState('');
  const handleButtonClick = () => {
    const result = age >= 18 ? 'You are an adult.' : 'You are a minor.';
    setMessage(result);
  };

  return (
    <div>
      <h1>Ternary Operation</h1>
      <p>{message}</p>
      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <button onClick={handleButtonClick}>Check Age</button>
    </div>
  );
}

export default TernaryOperation;
