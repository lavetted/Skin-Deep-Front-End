import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import API from "../services/api.jsx";
import { CartContext } from "../context/CartContext.jsx";
import "../App.css";

function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await API.get(`/products/${id}`);
      setProduct(response.data);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details-container">
      <div className="product-details-grid">
        {/* Image Section */}
        <div className="product-image-section">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="product-details-image"
          />
        </div>

        {/* Info Section */}
        <div className="product-info-section">
          <h1>{product.name}</h1>

          <p className="product-description">{product.description}</p>

          <h2 className="product-price">${product.price.toFixed(2)}</h2>

          <button
            className="add-cart-btn"
            onClick={() => addToCart(product._id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
