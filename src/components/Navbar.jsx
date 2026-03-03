import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/admin/products">Admin</Link>
    </nav>
  );
}

export default Navbar;
