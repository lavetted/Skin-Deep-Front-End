import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

const token = localStorage.getItem("token");

function Navbar() {
  const { items } = useContext(CartContext);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav style={{ display: "flex", gap: "20px", padding: "20px" }}>
      {/* <Link to="/">Home</Link> */}
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart ({totalItems})</Link>
      <Link to="/login">Login</Link>
      {/* <Link to="/admin/products">Admin</Link> */}
    </nav>
  );
}

{
  token ? (
    <button
      onClick={() => {
        localStorage.removeItem("token");
        window.location.reload();
      }}
    >
      Logout
    </button>
  ) : (
    <Link to="/login">Login</Link>
  );
}
export default Navbar;
