import React, { useState } from 'react';
function ArrayOfObject() {
  const [persons, setPersons] = useState([
    { id: 1, name: 'priyanka', hobbies: ['reading', 'traveling'] },
    { id: 2, name: 'soumya', hobbies: ['cooking', 'dancing'] },
  ]);
  const [newhobby, setNewHobby] = useState(" ");

  const addHobby = () => {
    if(newhobby.trim() === "") return; // prevent empty input
    setPersons(
      persons.map((person) =>
        person.id === 2
          ? { ...person, hobbies: [...person.hobbies, newhobby] }
          : person,
      )
    );
    setNewHobby(""); // clear input after adding hobby
  };
  return (
    <div>
      <h2>Array of Objects Example</h2>
      {persons.map((person) => (
        <div key={person.id}>
          <h3>{person.name}</h3>
          <p>Hobbies: {person.hobbies.join(', ')}</p>
        </div>
      ))}
      <button onClick={addHobby}>Add hobby of piku</button>
    </div>
  );
}
export default ArrayOfObject;
