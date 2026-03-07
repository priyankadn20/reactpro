import React, { useState } from 'react';
function ListRendering() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const addItem = () => {
    const newItems = document.getElementById('items').value;
    document.getElementById('items').value = '';
    setItems([...items, newItems]);
  };
  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };
  const updateItem = (index) => {
    setItems(items.map((item, i) => (i === index ? 'Updated Item' : item)));
  };
  return (
    <div>
      <h2>List Rendering</h2>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => deleteItem(index)}
            onDoubleClick={() => updateItem(index)}
          >
            {item}
          </li>
        ))}
      </ul>
      <input type="text" id="items" placeholder="Enter here" />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}
export default ListRendering;
