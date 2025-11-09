import React, { useState } from "react";
import "./Login.css";
import { loginUser } from "../api/auth";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("logging in...", formData);

    const res = await loginUser(formData);

    console.log("login response", res);

    if (res.error) {
      alert(res.error);
    } else {
      alert("Login Success ✅");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="College Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
