import React from "react";
import "./styles.css";
import Navbar from "./navbar";

function LoginForm() {
  return (
    <div className="container">
      <br></br>
      <h3>Login</h3>
      <br></br>
      <br></br>
      <input type="text" placeholder="username" />
      <br></br>
      <input type="password" placeholder="password" />
      <br></br>
      <button className="login-btn">Login</button>
      <br></br>
    </div>
  );
}
export default LoginForm;
