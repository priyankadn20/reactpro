import React, { useState } from 'react';

function AddObjectState() {
  // State for list of persons
  const [persons, setPersons] = useState([
    { name: 'priyanka', age: 23, city: 'sylhet' },
  ]);

  // State for input value
  const [inputValue, setInputValue] = useState("");

  // Add object using input value
  const addObject = () => {
    if (inputValue.trim() === "") return; // prevent empty input
    setPersons([...persons, { name: inputValue, age: 0, city: "" }]);
    setInputValue(""); // clear input after add
  };

  // Delete object at specific index
  const handleObjectDelete = (index) => {
    setPersons(persons.filter((_, i) => i !== index));
  };

  // Update object name at specific index
  const handleObjectUpdate = (index) => {
    const newName = prompt("Enter new name:", persons[index].name);
    if (newName !== null && newName.trim() !== "") {
      setPersons(
        persons.map((person, i) =>
          i === index ? { ...person, name: newName } : person
        )
      );
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Object State Example</h2>

      <ul>
        {persons.map((person, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <span
              onClick={() => handleObjectUpdate(index)}
              style={{ cursor: "pointer", marginRight: "10px" }}
            >
              {person.name}, {person.age}, {person.city}
            </span>
            <button onClick={() => handleObjectDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Enter Name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button onClick={addObject}>Add Object</button>
    </div>
  );
}

export default AddObjectState;