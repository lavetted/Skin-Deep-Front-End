import { createContext, useReducer, useEffect } from "react";
import API from "../services/api.jsx";

export const CartContext = createContext();

const initialState = {
  items: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "SET_CART":
      return { ...state, items: action.payload };

    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.payload] };

    case "UPDATE_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item._id === action.payload._id ? action.payload : item,
        ),
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from backend
  useEffect(() => {
    const fetchCart = async () => {
      const res = await API.get("/cart");
      dispatch({ type: "SET_CART", payload: res.data });
    };
    fetchCart();
  }, []);

  const addToCart = async (productId) => {
    const res = await API.post("/cart", {
      productId,
      quantity: 1,
    });
    dispatch({ type: "ADD_ITEM", payload: res.data });
  };

  const updateQuantity = async (id, quantity) => {
    const res = await API.put(`/cart/${id}`, { quantity });
    dispatch({ type: "UPDATE_ITEM", payload: res.data });
  };

  const removeFromCart = async (id) => {
    await API.delete(`/cart/${id}`);
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addToCart,
        updateQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
