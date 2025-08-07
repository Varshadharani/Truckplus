import React from "react";
import "./TrackingPage.css";
import truckBg from "../assets/gallery/truck8.jpeg"; // 🔄 use your actual image path
import sectionImg from '../assets/tracking.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import LTenergy  from "../assets/logo/LTenergy.jpeg";
import alfanar from "../assets/logo/alfanar.jpeg";
import cargo from "../assets/logo/cargo.png";
import dun from "../assets/logo/db.jpeg";
import mawani from "../assets/logo/mawani.jpeg";
import truck3 from "../assets/gallery/truck3.jpg"; // 🔄 use your actual image path

 const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
const brandLogos = [LTenergy,alfanar, cargo,dun,mawani];

const TrackingPage = () => {
  return (
    <div className="tracking-page">
      <div
        className="tracking-hero"
        style={{
          backgroundImage: `url(${truckBg})`,
        }}
      >
        <div className="hero-overlay">
          <h1>Package tracking is easy<br />with order number</h1>
          <p>
            Track packages from China, US Post, Canada Post, Royal Mail, Deutsche Post,<br />
            Aliexpress, UPS, Shein, FedEx, Pitney Bowes, eBay, Amazon
          </p>
        </div>
      </div>

       <section className="info-section">
        <div className="text-column">
          <h4>International Tracking For</h4>
          <h2>Reliable Parcel & Post Office Tracking</h2>
          <p>
            We offer real-time tracking updates via SMS or email. Whether it’s a shipment from China or a local courier, get precise updates directly to your device.
          </p>
          <div className="features">
            <div>
              <h5>🚀 Boost Your Reach</h5>
              <p>Expand globally with real-time shipping visibility.</p>
            </div>
            <div>
              <h5>🧠 Smart Notifications</h5>
              <p>Custom alerts via email or phone on every movement.</p>
            </div>
            <div>
              <h5>📦 Multi-Carrier Support</h5>
              <p>We support all major global carriers from FedEx to Shein.</p>
            </div>
            <div>
              <h5>🛠️ Easy Integration</h5>
              <p>Seamlessly integrate with your order system.</p>
            </div>
          </div>
        </div>
        <div className="image-column">
          <img src={sectionImg} alt="truck container" />
          <div className="overlay-box">
            <h3>We have 25+ years<br />of tracking excellence</h3>
            <p>
              With decades of logistics experience, we deliver precise and proactive tracking solutions.
            </p>
          </div>
        </div>
      </section>

      <div className="trusted-slider-section">
            <h2 className="trusted-slider-title">
              We are <span className="highlight">trusted</span> by major global brands
            </h2>
            <Slider {...settings}>
              {brandLogos.map((logo, index) => (
                <div className="slide" key={index}>
                  <img src={logo} alt={`Brand ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
<section className="feature-section">
  <div className="feature-heading">
    <span className="feature-label">Our Features</span>
    <h2>Why choose us</h2>
  </div>
  <div className="feature-cards">
    <div className="feature-card glass">
      <div className="icon-circle">🚚</div>
      <h3>Over 1200 couriers</h3>
      <p>Global reach, over 1200 couriers forming a seamless network for worldwide deliveries.</p>
    </div>
    <div className="feature-card glass">
      <div className="icon-circle">🤖</div>
      <h3>Automatic courier</h3>
      <p>Efficiency amplified through automation, reducing human intervention for accuracy.</p>
    </div>
    <div className="feature-card glass">
      <div className="icon-circle">⏱️</div>
      <h3>Real-time alert</h3>
      <p>Stay informed with instant updates, tracking your shipment’s progress as it happens.</p>
    </div>
    <div className="feature-card glass">
      <div className="icon-circle">📧</div>
      <h3>Email alerts</h3>
      <p>Essential information directly to your inbox, ensuring you’re always in the loop.</p>
    </div>
  </div>
</section>

<section className="delivery-showcase">
  <div className="delivery-content">
    <div className="text-block">
      <h2>Delivering Trust, Speed, and Innovation</h2>
      <p>
        Our cutting-edge delivery solutions combine the speed of technology with the personal touch of trusted service. Whether it's letters, packages, or premium logistics, our advanced platform ensures safe, trackable, and efficient delivery every time.
      </p>
      <ul className="highlights">
        <li>📦 Real-time package tracking</li>
        <li>🚛 Route-optimized courier dispatch</li>
        <li>🔒 Secure & encrypted communication</li>
      </ul>
    </div>
    <div className="image-block">
      <img src={truck3} />
    </div>
  </div>
</section>




    </div>
  );
};

export default TrackingPage;
