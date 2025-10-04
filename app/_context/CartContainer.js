"use client";

import { createContext, useContext, useReducer, useState } from "react";

const CartContext = createContext();

const initialState = {
  count: 1,
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "increase/cart": {
      const checkCart = state.cart.find((s) => s.name === action.payload);
      return {
        ...state,
        count: checkCart ? 1 : state.count + 1,
        cart: checkCart
          ? state.cart.map((s) => {
              if (s.name === action.payload) {
                return {
                  ...s,
                  quantity: s.quantity + 1,
                };
              }
              return s;
            })
          : [...state.cart],
      };
    }
    case "decrease/cart": {
      const checkCart = state.cart.find((s) => s.name === action.payload);
      return {
        ...state,
        count: checkCart ? 1 : state.count - 1,
        cart: checkCart
          ? state.cart.map((s) => {
              if (s.name === action.payload) {
                return {
                  ...s,
                  quantity: s.quantity - 1,
                };
              }
              return s;
            })
          : [...state.cart],
      };
    }
    case "add/cart": {
      const checkCart = state.cart.find(
        (cart) => cart.name === action.payload.name
      );
      return {
        ...state,
        cart: checkCart ? [...state.cart] : [...state.cart, action.payload],
        count: 1,
      };
    }
    case "remove/cart": {
      console.log(action.payload);
      return {
        ...state,
        cart: state.cart.filter((cart) => cart.name !== action.payload.name),
        count: 1,
      };
    }
    case "remove/all": {
      return {
        count: 1,
        cart: [],
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
