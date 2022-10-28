import React from "react";
import "./styles.css";
import LoginForm from "./LoginForm";

export default function Navbar() {
  return (
    <>
      <nav className="nav">
        <a href="/" className="site-title">
          Dream Home
        </a>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/clients">Clients</a>
          </li>
          <li>
            <a href="/portofolio">Portofolio</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
