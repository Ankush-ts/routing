import React, { useState } from "react";
import "./login.scss";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const isDisabled = () => {
    if (email.length > 7 && password.length > 8) {
      return false;
    }
    return true;
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className="box">
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </div>
        <button type="submit" disabled={isDisabled()}>
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
