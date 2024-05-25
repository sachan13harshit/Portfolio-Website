import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <a className="hs">
        {/* Uncomment the SVG if needed */}
        {/* <svg id="logo-14" width="73" height="49" viewBox="0 0 73 49" fill="none" xmlns="http://www.w3.org/2000/svg"> 
          <path d="M46.8676 24C46.8676 36.4264 36.794 46.5 24.3676 46.5C11.9413 46.5 1.86765 36.4264 1.86765 24C1.86765 11.5736 11.9413 1.5 24.3676 1.5C36.794 1.5 46.8676 11.5736 46.8676 24Z" className="ccustom" fill="#68DBFF"></path> 
          <path d="M71.1324 24C71.1324 36.4264 61.1574 46.5 48.8529 46.5C36.5484 46.5 26.5735 36.4264 26.5735 24C26.5735 11.5736 36.5484 1.5 48.8529 1.5C61.1574 1.5 71.1324 11.5736 71.1324 24Z" className="ccompli1" fill="#FF7917"></path> 
          <path d="M36.6705 42.8416C42.8109 38.8239 46.8676 31.8858 46.8676 24C46.8676 16.1144 42.8109 9.17614 36.6705 5.15854C30.5904 9.17614 26.5735 16.1144 26.5735 24C26.5735 31.8858 30.5904 38.8239 36.6705 42.8416Z" className="ccompli2" fill="#5D2C02"></path> 
        </svg> */}
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
