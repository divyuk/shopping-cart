import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  return (
    <>
    {/* Product and Cart component */}
      <Products />
      <Cart />
    </>
  );
}

export default App;
