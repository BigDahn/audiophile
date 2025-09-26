"use client";

import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  count: 1,
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "increase/cart": {
      const checkCart = state.cart.find((s) => s.name === action.payload);
      console.log(checkCart);
      return {
        ...state,
        count: checkCart
          ? state.cart.map((s) => {
              if (s.name === action.payload) {
                return {
                  ...s,
                  quantity: s.quantity + 1,
                };
              }
              return s;
            })
          : state.count + 1,
      };
    }
    case "decrease/cart": {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    case "add/cart": {
      return {
        ...state,
        cart: [...state.cart, action.payload],
        count: 1,
      };
    }
    default:
      break;
  }
}

function CartContainer({ children }) {
  const [{ count, cart }, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ count, cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("context was used outside parent context");

  return context;
}

export { useCart, CartContainer };
