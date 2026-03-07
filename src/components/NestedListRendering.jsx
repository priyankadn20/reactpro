import React from 'react';

function ListRender() {
  const categories = [
    {
      name: 'Fruits',
      items: ['Apple', 'Banana', 'Orange'],
    },
    {
      name: 'Vegetables',
      items: ['Carrot', 'Spinach', 'Potato'],
    },
  ];
  return (
    <div>
      <h2>List Rendering</h2>
      <ul>
        {categories.map((categorie, indexFruit) => (
          <li key={indexFruit}>
            {categorie.name}
            <ul>
              {categorie.items.map((item, indexItem) => (
                <li key={indexItem}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ListRender;
