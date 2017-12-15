import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <link to="/">Log In</link>
      <link to="/profile">Profile</link>
      <link to ="/shopping-list">Shopping List</link>
    </nav>
  )
}
