import React, { useEffect, useState } from 'react';

function SetingTime() {
  const [time, setTime] = useState(0);
  const handleChange = () => {
    setTime(time + 1);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time + 1);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <h2>Setting Time</h2>
      <p>Time: {time}</p>
      <button onClick={handleChange}>Increase Time</button>
    </div>
  );
}
export default SetingTime;
