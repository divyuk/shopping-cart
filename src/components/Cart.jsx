import productsList from "../data/productArray";
import { useProduct } from "../hooks/useProduct";

function Cart() {
  const { state } = useProduct();
  console.log(state);
  return <div>a</div>;
}

export default Cart;
