import React, { useState } from "react";

function InputExample() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value); // event.target.value হল input এর value
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <p>Your name is: {name}</p>
    </div>
  );
}

export default InputExample;