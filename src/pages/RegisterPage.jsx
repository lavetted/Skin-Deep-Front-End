import { useState } from "react";
import API from "../services/api.jsx";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/register", form);

      // auto login
      const loginRes = await API.post("/auth/login", {
        email: form.email,
        password: form.password,
      });

      localStorage.setItem("token", loginRes.data.token);

      navigate("/products");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button>Register</button>
    </form>
  );
}

export default RegisterPage;
