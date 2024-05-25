import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <a className="hs">
      
        HARSHIT SACHAN {"</>"}
      </a>
      <div>
        <ul id="navbar">
          <li>
            <Link className={location.pathname === '/' ? 'active' : ''} to="/">Home</Link>
          </li>
          <li>
            <Link className={location.pathname === '/about' ? 'active' : ''} to="/about">About</Link>
          </li>
          <li>
            <Link className={location.pathname === '/projects' ? 'active' : ''} to="/projects">Projects</Link>
          </li>
          <li>
            <Link className={location.pathname === '/skills' ? 'active' : ''} to="/skills">Skills</Link>
          </li>
          <li>
            <Link className={location.pathname === '/contact' ? 'active' : ''} to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
