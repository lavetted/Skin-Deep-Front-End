import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await API.get(`/products/${id}`);
      setProduct(response.data);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <img src={product.imageUrl} width="300" />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h2>${product.price}</h2>
    </div>
  );
}

export default ProductDetailsPage;
