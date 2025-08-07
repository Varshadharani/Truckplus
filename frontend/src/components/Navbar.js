import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/Trucklogo1.png';
import { Link } from 'react-router-dom'; // ✅ Import Link
import { Menu, X } from 'lucide-react';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
      const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
   const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Truck Plus Logo" className="logo" />
      </div>
       <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </div>
      <div className={`navbar-right ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>Landing</Link>
        <Link to="/home" onClick={closeMenu}>Home</Link>
             <Link to="/about" onClick={closeMenu}>About Us</Link>
        <Link to="/services" onClick={closeMenu}>Services</Link>
        {/* <Link to="/about" onClick={closeMenu}>About Us</Link> */}
        <Link to="/tracking" onClick={closeMenu}>Tracking</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        <a href="#" className="language" onClick={closeMenu}>🌐 العربية</a>
      </div>
        
    </nav>
  );
};

export default Navbar;
