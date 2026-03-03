import React, { useState } from "react";

function BooleanExample() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle
      </button>

      {isVisible && <p>Hello Piku</p>}
    </div>
  );
}

export default BooleanExample;
