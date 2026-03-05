import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

function CheckoutPage() {
  const { items } = useContext(CartContext);

  const total = items.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  const handleCheckout = () => {
    alert("Order placed successfully!");
  };

  return (
    <div>
      <h1>Checkout</h1>

      {items.map((item) => (
        <div key={item._id}>
          <p>{item.product.name}</p>
          <p>{item.quantity}</p>
        </div>
      ))}

      <h2>Total: ${total}</h2>

      <button onClick={handleCheckout}>Place Order</button>
    </div>
  );
}

export default CheckoutPage;
