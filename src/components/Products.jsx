import { useContext } from "react";
import productsList from "../data/productArray";
import ProductCard from "./ProductCard";
import { useProduct } from "../hooks/useProduct";

function Products() {
  const { state, handleAddCart } = useProduct();

  const handleClick = (id) => {
    handleAddCart(id);
  };

  return (
    <div>
      {productsList.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
          <button onClick={() => handleClick(product.id)}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Products;
