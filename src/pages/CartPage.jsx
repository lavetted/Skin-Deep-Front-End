import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";
import CartItem from "../components/CartItem.jsx";

function CartPage() {
  const { items } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const total = items.reduce(
    (sum, item) => sum + (item.product?.price || 0) * item.quantity,
    0,
  );

  if (!items.length) return <p>Your cart is empty</p>;

  return (
    <div>
      <h1>Your Cart</h1>

      {items.map((item) => (
        <CartItem key={item._id} item={item} />
      ))}

      <h2>Total: ${total.toFixed(2)}</h2>

      <button
        onClick={() => navigate("/checkout")}
        style={{
          padding: "12px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    padding: "40px",
    maxWidth: "1200px",
    margin: "auto",
  },

  cartItems: {
    flex: 3,
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
  },

  cartItem: {
    display: "flex",
    borderBottom: "1px solid #ddd",
    padding: "20px 0",
    alignItems: "center",
  },

  image: {
    width: "120px",
    marginRight: "20px",
  },

  details: {
    flex: 1,
  },

  controls: {
    marginTop: "10px",
  },

  remove: {
    marginLeft: "20px",
    color: "red",
    background: "none",
    border: "none",
    cursor: "pointer",
  },

  price: {
    fontWeight: "bold",
    fontSize: "18px",
  },

  checkout: {
    flex: 1,
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    height: "fit-content",
    border: "1px solid #ddd",
  },

  checkoutBtn: {
    marginTop: "20px",
    width: "100%",
    padding: "12px",
    background: "#FFD814",
    border: "1px solid #FCD200",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default CartPage;
