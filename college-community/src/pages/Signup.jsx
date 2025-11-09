import React, { useState } from "react";
import "./Signup.css";
import { registerUser } from "../api/auth";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log("Submitting signup...", formData);

    const res = await registerUser(formData);

    console.log("Response from backend:", res);

    setLoading(false);

    if (res.error) {
      alert("Registration Failed ❌");
    } else {
      alert("Registration Successful ✅");
    }
  };

  return (
    <div className="signup-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />

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

        <input
          type="password"
          placeholder="Confirm Password"
          value={formData.password2}
          onChange={(e) => setFormData({ ...formData, password2: e.target.value })}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
