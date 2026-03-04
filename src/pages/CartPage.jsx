import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

function CartPage() {
  const { items, updateQuantity, removeFromCart } = useContext(CartContext);

  const total = items.reduce((acc, item) => {
    return acc + item.productId.price * item.quantity;
  }, 0);

  return (
    <div>
      <h1>Your Cart</h1>

      {items.map((item) => (
        <div key={item._id} style={{ marginBottom: "20px" }}>
          <h3>{item.productId.name}</h3>
          <p>${item.productId.price}</p>

          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateQuantity(item._id, Number(e.target.value))}
          />

          <button onClick={() => removeFromCart(item._id)}>Remove</button>
        </div>
      ))}

      <h2>Total: ${total.toFixed(2)}</h2>
    </div>
  );
}

export default CartPage;
