import React, { useEffect, useState } from 'react';
function EventListener() {
  const [test, setTest] = useState(0);
  const handleClick = () => {
    setTest(alert('hello priyanka'));
  };
  const darkcolor = () => {
    document.body.style.backgroundColor = 'yellow';
    btn.style.color = 'blue';
  };

  useEffect(() => {
    const btn = document.getElementById('btn');
    btn.addEventListener('click', darkcolor);
  });
  return (
    <div>
      <h2>Event Listener</h2>
      <button id="btn" onClick={handleClick}>
        Click
      </button>
    </div>
  );
}
export default EventListener;
