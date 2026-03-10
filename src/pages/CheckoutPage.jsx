import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext.jsx";
import API from "../services/api.jsx";
import "../App.css";

function CheckoutPage() {
  const { items } = useContext(CartContext);

  const [shipping, setShipping] = useState({
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const total = items.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  const handleChange = (e) => {
    setShipping({
      ...shipping,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckout = async () => {
    if (
      !shipping.address ||
      !shipping.city ||
      !shipping.state ||
      !shipping.zip
    ) {
      alert("Please fill in all shipping fields");
      return;
    }

    const res = await API.post("/payment/create-checkout-session", {
      cartItems: items,
      shipping,
    });

    window.location.href = res.data.url;
  };

  return (
     <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>

      <div className="checkout-grid">

        {/* Shipping Section */}
        <div className="shipping-section">

      <h2>Enter your shipping information.</h2>

      <input
        name="address"
        placeholder="Street Address"
        value={shipping.address}
        onChange={handleChange}
      />

      <input
        name="city"
        placeholder="City"
        value={shipping.city}
        onChange={handleChange}
      />

      <input
        name="state"
        placeholder="State"
        value={shipping.state}
        onChange={handleChange}
      />

      <input
        name="zip"
        placeholder="ZIP Code"
        value={shipping.zip}
        onChange={handleChange}
      />

      <h2>Order Summary</h2>

      {items.map((item) => (
        <div key={item._id}>
          <p>{item.product.name}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}

      <h2>Total: ${total}</h2>

      <button onClick={handleCheckout}>Checkout with Stripe</button>
        </div>

      </div>
    </div>
  );
}

export default CheckoutPage;
