import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";
import CartItem from "../components/CartItem.jsx";
import "../App.css";

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

  if (!items.length) return <p className="empty-cart">Your cart is empty</p>;

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>

      <div className="cart-layout">
        {/* Cart Items */}
        <div className="cart-items">
          {items.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
        </div>

        {/* Order Summary */}
        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button
            className="checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
