import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen } from 'react-icons/ai';

import './Navbar.css';

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
            <Link className={location.pathname === '/' ? 'active' : ''} to="/">
            <AiOutlineHome /> Home
            </Link>
          </li>
          <li>
            <Link className={location.pathname === '/about' ? 'active' : ''} to="/about">
            <AiOutlineUser /> About
            </Link>
          </li>
          <li>
            <Link className={location.pathname === '/projects' ? 'active' : ''} to="/projects">
            <AiOutlineFundProjectionScreen /> Projects
            </Link>
          </li>
          <li>
            <Link className={location.pathname === '/skills' ? 'active' : ''} to="/skills">
            <FontAwesomeIcon icon={faTools}/>  Skills
            </Link>
          </li>
          <li>
            <Link className={location.pathname === '/contact' ? 'active' : ''} to="/contact">
            <FontAwesomeIcon icon={faEnvelope}/> Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
