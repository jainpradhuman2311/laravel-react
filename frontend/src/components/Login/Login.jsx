import React, { useState } from "react";
import "./Login.css"
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try{
    const response = await axios.post('http://localhost:8000/api/login',{
        email,
        password
    });
    if(response.status === 200){
      localStorage.setItem("token",response.data.token)
      window.location.href = "/account-settings"
    }
    return response;
  }catch(err){
    console.log("err",err)
    toast(err.response.data.message || "Something went wrong");
  }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login()
  };

  return (
    <>
    <div className="login-container">
      <div className="card">
        <div className="card-content">
          <h2 className="heading">Login</h2>
          <form onSubmit={handleSubmit} className="form">
            <div className="input-group">
              <label htmlFor="email" className="label">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input"
                placeholder="you@example.com"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password" className="label">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input"
                placeholder="••••••••"
              />
            </div>
            <button type="submit" className="button">Sign In</button>
          </form>
        </div>
      </div>
    </div>
     <ToastContainer />
     </>
  );
};

export default LoginForm;