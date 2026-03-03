import { Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
// import CartPage from "./pages/CartPage.jsx";
// import AdminProductsPage from "./pages/AdminProductsPage.jsx";
import Navbar from "./components/Navbar.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        {/* <Route path="/cart" element={<CartPage />} />
        <Route path="/admin/products" element={<AdminProductsPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
