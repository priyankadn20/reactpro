import REACT, { useState } from 'react';
function AddArray() {
  const [foods, setfoods] = useState(['apple', 'date', 'banana']);
  const addArray = () => {
    const newArray = document.getElementById('arrayInput').value;
    document.getElementById('arrayInput').value = ' ';
    setfoods([...foods, newArray]);
  };
  const handleDelete = (index) => {
    setfoods(foods.filter((_, i) => i !== index));
  };
  const handleUpdate = (index) => {
    setfoods(foods.map((food, i) => (i === index ? 'orange' : food)));
  };
  return (
    <div>
      <h2>List Of Array State</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleUpdate(index)} onDoubleClick={() => handleDelete(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="arrayInput" placeholder="ENTER Array Value" />
      <button onClick={addArray}>Add Array</button>
    </div>
  );
}
export default AddArray;
