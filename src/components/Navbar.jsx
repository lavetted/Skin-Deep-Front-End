import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import "../App.css";

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
    <nav className="navbar">
      {/* Left */}
      <div className="nav-left">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </div>

      {/* Right */}
      <div className="nav-right">
        <Link to="/cart">Cart ({totalItems})</Link>

        {token ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
