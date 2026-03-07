import React, { useState } from 'react';
function computedState() {
  const [items, setItems] = useState([
    { name: 'Apple', price: 10 },
    { name: 'Banana', price: 20 },
  ]);
  const total = items.reduce((sum,item)=>sum + item.price, 0);
  return (
    <div>
      <h1>Computed State Example</h1>
      {items.map((item, index)=><p key={index}>{item.name} - ${item.price}</p>)}
      <h3>Total Price: ${total}</h3>
    </div>
  );
}
export default computedState;
