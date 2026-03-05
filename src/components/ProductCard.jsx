import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{ border: "1px solid gray", padding: "15px", width: "200px" }}>
      <img src={product.image} alt={product.name} width="150" />

      <h3>{product.name}</h3>

      <p>${product.price}</p>

      <Link to={`/products/${product._id}`}>View</Link>

      <button onClick={() => addToCart(product._id)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
