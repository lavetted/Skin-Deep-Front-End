import { useEffect, useState } from "react";
import API from "../services/api.jsx";

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await API.get("/orders");
      setOrders(res.data);
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Your Orders</h1>

      {orders.map((order) => (
        <div key={order._id}>
          <h3>Order ID: {order._id}</h3>
          <p>Total: ${order.total}</p>

          {order.items.map((item) => (
            <p key={item._id}>
              {item.product.name} x {item.quantity}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default OrdersPage;
