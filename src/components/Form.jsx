import { useState } from 'react';
export default function Form() {
  const [name, setName] = useState({ firstName: '', lastName: '' });
    function handleSubmit(e) {
        e.preventDefault();
        console.log(name);
    }
  return (
    <div>
      <form>

        {name.firstName} - {name.lastName}
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        />
        <input
          type="text"
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          value={name.lastName}
        />
        <button onClick={() => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  );
}
