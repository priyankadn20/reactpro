import Fruit from './Fruit.jsx';

export default function Fruits() {
  const fruits = [
    { name: 'Apple', color: 'Red', price: 10, soldout: false },
    { name: 'Banana', color: 'Yellow', price: 15, soldout: true },
    { name: 'Orange', color: 'Orange', price: 20, soldout: false },
    { name: 'Mango', color: 'Yellow', price: 25, soldout: true },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            color={fruit.color}
            price={fruit.price}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
