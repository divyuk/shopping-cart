function ProductCard({ product }) {
  const { id, productName, fastDelivery, rating, price } = product;

  return (
    <div className="container">
      <h1>{productName}</h1>
      <p> Fast Delivery : {fastDelivery}</p>
      <p> Rating : {rating} </p>
      <p>Price : {price} </p>
    </div>
  );
}

export default ProductCard;
