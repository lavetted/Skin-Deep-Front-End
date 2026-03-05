import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import ProductsPage from "./pages/ProductsPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import Navbar from "./components/Navbar.jsx";
import ProtectedRoute from "./routes/protectedRoute.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import "./App.css";

function App() {

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      console.log("User already logged in");
    }
  }, []);

  return (
    <div>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<ProductsPage />} />

        {/* Login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Products */}
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />

        {/* Cart */}
        <Route path="/cart" element={<CartPage />} />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={<ProtectedRoute>{/* <Dashboard /> */}</ProtectedRoute>}
        />
      </Routes>
    </div>
  );
}

export default App;
