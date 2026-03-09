import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div style={{ borderBottom: "1px solid gray", padding: "10px" }}>
      <img
        src={item.product?.image || "https://placehold.co/200"}
        alt={item.product?.name}
      />

      <h3>{item.product?.name}</h3>

      <p>${item.product?.price}</p>

      <input
        type="number"
        value={item.quantity}
        min="1"
        onChange={(e) => updateQuantity(item._id, Number(e.target.value))}
      />

      <button onClick={() => removeFromCart(item._id)}>Remove</button>
    </div>
  );
}

export default CartItem;
