import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext.jsx";
import API from "../services/api.jsx";

function CheckoutPage() {
  const { items } = useContext(CartContext);
  const [address, setAddress] = useState("");

  const total = items.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  const handleCheckout = async () => {
    await API.post("/orders", {
      shippingAddress: {
        address,
      },
    });
    alert("Order placed successfully!");
  };

  return (
    <div>
      <h1>Checkout</h1>

      <p>Confirm your order.</p>

      <input
        placeholder="Shipping Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

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
