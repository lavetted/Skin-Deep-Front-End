import { createContext, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api.jsx";

export const CartContext = createContext();

const initialState = {
  items: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "SET_CART":
      return { ...state, items: action.payload };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const navigate = useNavigate();

  const fetchCart = async () => {
    try {
      const res = await API.get("/cart");
      dispatch({ type: "SET_CART", payload: res.data.items });
    } catch (err) {
      console.log("User not logged in yet");
    }
  };

  const addToCart = async (productId) => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    const res = await API.post("/cart", { productId });

    dispatch({
      type: "SET_CART",
      payload: res.data.items,
    });
  };

  const updateQuantity = async (id, quantity) => {
    const res = await API.put(`/cart/${id}`, { quantity });
    dispatch({ type: "SET_CART", payload: res.data.items });
  };

  const removeFromCart = async (id) => {
    const res = await API.delete(`/cart/${id}`);
    dispatch({ type: "SET_CART", payload: res.data.items });
  };

  useEffect(() => {
    fetchCart();
  }, []);

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
