import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import ProductsPage from "./pages/ProductsPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import Navbar from "./components/Navbar.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import OrdersPage from "./pages/OrdersPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
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
        <Route path="/" element={<HomePage />} />

        {/* Products */}

        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />

        {/* Login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Cart */}
        <Route path="/cart" element={<CartPage />} />

        <Route path="/checkout" element={<CheckoutPage />} />

        <Route path="/orders" element={<OrdersPage />} />

        <Route path="/register" element={<RegisterPage />} />

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
