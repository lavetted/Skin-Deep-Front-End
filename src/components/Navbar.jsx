import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

function Navbar() {
  const { items } = useContext(CartContext);
  const navigate = useNavigate();

  const totalItems = items?.reduce((acc, item) => acc + item.quantity, 0) || 0;

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <Link to="/">Home</Link>

      <Link to="/products">Products</Link>

      <Link to="/cart">Cart ({totalItems})</Link>

      {token ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}

export default Navbar;
