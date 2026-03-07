function ProductCardSystem({ items }) {

  const buynow = (name) => {
    alert(`You have bought ${name}`);
  };

  return (
    <div className="container">
      <h1>Product Card System</h1>

      <div className="card-container">
        {items.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ৳{item.price}</p>
            <button onClick={() => buynow(item.name)}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCardSystem;