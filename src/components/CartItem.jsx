import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import "../App.css";

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-item">
      <img
        className="cart-item-image"
        src={item.product?.imageUrl || "https://placehold.co/200"}
        alt={item.product?.name}
      />

      <div className="cart-item-info">
        <h3>{item.product?.name}</h3>
        <p className="cart-item-price">${item.product?.price}</p>
      </div>

      <input
        className="cart-item-qty"
        type="number"
        value={item.quantity}
        min="1"
        onChange={(e) => updateQuantity(item._id, Number(e.target.value))}
      />

      <button className="remove-btn" onClick={() => removeFromCart(item._id)}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;
