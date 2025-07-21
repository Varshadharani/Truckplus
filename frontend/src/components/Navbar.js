import './Navbar.css';
import logo from '../assets/trucklogo.png';
import { Link } from 'react-router-dom'; // ✅ Import Link

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Truck Plus Logo" className="logo" />
      </div>
      <div className="navbar-right">
        <Link to="/">Landing</Link> {/* ✅ Landing Page */}
        <Link to="/home">Home</Link> {/* ✅ Home Page */}
        <Link to="/services" className="nav-link">Services</Link>
        <a href="#">About Us</a>
        <a href="#">Fleet</a>
        <a href="#">Contact</a>
        <a href="#" className="language">🌐 العربية</a>
      </div>
    </nav>
  );
};

export default Navbar;
