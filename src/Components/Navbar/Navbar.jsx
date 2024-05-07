import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/calculator" className="nav-link">Calculator</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
