import React from "react";
import "./header.scss";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
      </div>
      <div>
        <NavLink to="/login">Sign In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
    </div>
  );
};

export default Header;
