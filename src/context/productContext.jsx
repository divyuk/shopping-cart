import { createContext, useReducer } from "react";

const cart = [];

export const ProductContext = createContext();

function reducerFunc(state, action) {
  switch (action.type) {
    case "ADD_CART":
      return [...state, { id: action.payload }];
  }
}

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(reducerFunc, cart);

  const handleAddCart = (id) => {
    dispatch({ type: "ADD_CART", payload: id });
  };

  return (
    <ProductContext.Provider value={{ state, handleAddCart }}>
      {children}
    </ProductContext.Provider>
  );
}
