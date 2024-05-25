import React from "react";
import { Link, useLocation } from "react-router-dom";
import { links } from "../utils/constants";
import "../styles/Header.css";

const Header = () => {
  const location = useLocation();

  return (
    <header id="header" className="header">
      <div className="header-container">
        <Link to="/" className="brand">
          HARSHIT SACHAN {"</>"}
        </Link>
        <nav className="nav-links">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? "active-link" : ""}`}
            >
              {link.text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;

