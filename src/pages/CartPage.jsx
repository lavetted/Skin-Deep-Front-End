import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import CartItem from "../components/CartItem.jsx";

function CartPage() {
  const { items, updateQuantity, removeFromCart } = useContext(CartContext);

  const total = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
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
    </div>
  );
}

export default CartPage;
