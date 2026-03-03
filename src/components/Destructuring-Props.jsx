function PropsDestructuring({ name , age, address, onDelete }) {
return (
    <div>
      <h2>
        My name is {name} and my age is {age}
      </h2>
      <h2>
        My address is {address.city}, {address.country} 
      </h2>
      <button onClick={() => onDelete(address.city)}>DELETE</button>
    </div>
  );
}
export default PropsDestructuring;
