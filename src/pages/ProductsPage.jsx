import { useEffect, useState } from "react";
import API from "../services/api.jsx";
import { Link } from "react-router-dom";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await API.get("/products");
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>All Products</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {Array.isArray(products) &&
          products.map((product) => (
            <div
              key={product._id}
              style={{ border: "1px solid #ccc", padding: "10px" }}
            >
              <Link to={`/products/${product._id}`}>
                <img src={product.imageUrl} width="150" />
                <h3>{product.name}</h3>
              </Link>
              <p>${product.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductsPage;
