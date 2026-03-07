import React, { useState } from "react";

function FormExample() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    alert(`Email submitted: ${email}`);
    setEmail(""); // clear input after submit
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormExample;