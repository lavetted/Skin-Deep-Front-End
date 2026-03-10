import { useEffect, useState } from "react";
import API from "../services/api.jsx";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await API.get("/products");
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      await API.post("/cart", { productId });
      alert("Added to cart!");
    } catch (err) {
      alert("Please login first.");
      navigate("/login");
    }
  };

  return (
    <div className="products-container">
      <h1 className="products-title">Products</h1>

      <div className="products-grid">
        {Array.isArray(products) &&
          products.map((product) => (
            <div key={product._id} className="product-card">
              <Link to={`/products/${product._id}`}>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="product-image"
                />

                <h3>{product.name}</h3>
              </Link>

              <p className="product-price">${product.price.toFixed(2)}</p>

              <button
                className="add-cart-btn"
                onClick={() => handleAddToCart(product._id)}
              >
                Add to Cart
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductsPage;
