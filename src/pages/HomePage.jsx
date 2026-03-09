import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-container">
      <h1>Welcome to Skin Deep</h1>

      <Link to="/products" className="shop-link">
        Shop Products
      </Link>
    </div>
  );
}

export default HomePage;
