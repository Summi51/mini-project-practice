// Login.js (or your corresponding login component)
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://dalocalprojectbackend.vercel.app/users/login", {
        email,
        password,
      });
      const user = response.data;

      console.log(user);
      localStorage.setItem("token", user.token);
      localStorage.setItem("isAdmin", user.isAdmin);
      navigate('/')
      
    } catch (error) {
      alert("Login failed: " + error.response.data.err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
