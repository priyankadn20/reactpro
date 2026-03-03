function rendeingList() {
  const fruits = ['Apple', 'Banana', 'Orange'];
  return (
    <div>
      <ul>
        {fruits.map((fruits) => (
          <li>{fruits}</li>
        ))}
      </ul>
    </div>
  );
}
export default rendeingList;
