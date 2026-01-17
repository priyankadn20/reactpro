export default function Fruit({ name, color, price, soldout }) {
  return (
    <div>
      <li>
        {name} - {color} - ${price} {soldout ? 'soldout' : 'available'}
      </li>
    </div>
  );
}
