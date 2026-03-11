import { useState } from "react";
import API from "../services/api.jsx";
import { useNavigate } from "react-router-dom";
import "../App.css";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/register", {
        name,
        email,
        password,
      });

      alert("Account created! Shopping awaits...");

      localStorage.setItem("token", res.data.token);

      navigate("/products");
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h1>Create Account</h1>

        <input
          required
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          required
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          required
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
