import React from "react";
import {Link} from "react-router-dom";

const styles = {
  fontSize: "1.5em",
  color: "#ff9d00",
  fontFamily: "monospace",
  fontStyle: "italic",
  textDecoration: "none"
}

export default function Navbar(){
  return (
    <div className="nav">
      <Link style={styles} to="/"> home </Link>
      <Link style={styles} to="/my-list"> myList </Link>
      <Link style={styles} to="/book"> favBooks </Link>
    </div>
  )
}
