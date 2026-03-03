function ArrayObject() {
  const data = [
    { id: 1, name: 'Priyanka', age: 30 },
    { id: 2, name: 'Rahul', age: 28 },
  ];
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          {' '}
          {item.id} {" "} {item.name} {item.age}
        </li>
      ))}
    </ul>
  );
}
export default ArrayObject;
