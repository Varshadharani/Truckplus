import './App.css';
import TopBar from './components/TopBar'; 
import truckBg from './assets/landingplus.jpeg';
 import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from "./pages/ServicesPage";
import AboutPage from './pages/AboutPage';
import TrackingPage from './pages/TrackingPage';
import ContactPage from './pages/ContactPage';
import WhatsAppChat from "./components/WhatsAppChat";

import { Routes, Route,useNavigate  } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
   const navigate = useNavigate();
  return (
    <div>
      <TopBar />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Parallax bgImage={truckBg} strength={300}>
                <div className="parallax-landing">
                  <div className="overlay">
                    <h1>Seamless Logistics, Delivered With Precision</h1>
                    <p>Trusted by businesses across Saudi Arabia & GCC region.</p>
                    <button className="cta-btn" onClick={() => navigate("/home")}>Explore</button>
                  </div>
                </div>
              </Parallax>

              <section className="services">
                <h2>Our Key Services</h2>
                <div className="services-list">
                  <div>
                    <h3>Freight Forwarding</h3>
                    <p>Efficient local & international shipping solutions.</p>
                  </div>
                  <div>
                    <h3>Warehousing</h3>
                    <p>Secure storage facilities across key locations.</p>
                  </div>
                  <div>
                    <h3>Customs Clearance</h3>
                    <p>Hassle-free import/export clearance.</p>
                  </div>
                </div>
              </section>

              <section className="why-choose">
                <h2>Why Choose TRUCKPLUS?</h2>
                <ul>
                  <li>🚛 Fast & Reliable Delivery</li>
                  <li>🌐 GCC-Wide Network</li>
                  <li>💰 Competitive Pricing</li>
                  <li>📍 Real-time Shipment Tracking</li>
                </ul>
              </section>
            </>
          }
        />
        <Route path="/home" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tracking" element={<TrackingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <WhatsAppChat />

      <Footer />
    </div>
  );
}

export default App;
