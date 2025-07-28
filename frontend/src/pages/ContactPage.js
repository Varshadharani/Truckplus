import React, { useState,useEffect } from 'react';
import './ContactPage.css'; // Your custom styles
import saudiBanner from '../assets/saudi.webp';
import desertTruck from '../assets/desserttruck.png'; // Update with your actual image path
import building from '../assets/building.webp'; // Update with your actual image path
import dubaiHub from '../assets/dubai.jpg';
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import LTenergy  from "../assets/logo/LTenergy.jpeg";
import alfanar from "../assets/logo/alfanar.jpeg";
import cargo from "../assets/logo/cargo.png";
import dun from "../assets/logo/db.jpeg";
import mawani from "../assets/logo/mawani.jpeg"; 
const brandLogos = [LTenergy,alfanar, cargo,dun];// Update with your actual image path
const testimonials = [
  {
    name: "Yahya Abdulaziz",
    company: "mawani",
    logo: mawani,
    text: "Top-notch service! Swift delivery, professional handling. Truck Plus made shipping a breeze. Highly recommended!",
    rating: 5,
    support: "For customer support",
  },
  {
    name: "Rashid Salem",
    company: "Namma Cargo",
    logo: cargo,
    text: "Exceptional experience with Truck Plus. They exceeded expectations. Reliable, efficient, and hassle-free.",
    rating: 5,
    support: "For customer support",
  },
  {
    name: "Nasser Zayed",
    company: "Dun & Bradstreet",
    logo: dun,
    text: "Impeccable service that goes the extra mile. Truck Plus is my go-to for secure and timely shipping. 5-star service!",
    rating: 5,
    support: "For customer support",
  },
  {
    name: "Khalid B",
    company: "L&T Hydrocarbon",
    logo: LTenergy,
    text: "Reliability at its finest. Always on time and with care. Outstanding service. A definite 5-star.",
    rating: 5,
    support: "For customer support",
  },
];
const ContactPage = () => {
    const [index, setIndex] = useState(0);
    
      const nextSlide = () => {
        setIndex((prev) => (prev + 1) % testimonials.length);
      };
    
      const prevSlide = () => {
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      };
    
      useEffect(() => {
        const interval = setInterval(nextSlide, 4000); // auto slide every 4 sec
        return () => clearInterval(interval);
      }, [index]);
        const visibleTestimonials = [
        ...testimonials,
        ...testimonials,
        ...testimonials, // ensure smooth loop
      ].slice(index, index + 4);
  return (
    <div className="contact-page">
    <section
        className="creative-banner"
        style={{
          backgroundImage: `url(${saudiBanner})`,
        }}
      >
        <div className="creative-banner-content">
          <h1>Connecting the Kingdom Through Smart Logistics</h1>
          <p>
            From Dammam to Riyadh, we deliver precision, speed, and secure trucking solutions across Saudi Arabia.
          </p>
        </div>
      </section>
<section className="desert-form-container">
     
  <div className="form-content">
  <div className="form-overlay">
    <div className="form-left">
      <h2>Still Have Questions?</h2>
      <form className="form-layout" onSubmit={(e) => e.preventDefault()}>
        <div className="form-row">
          <div className="form-group">
            <label>Name *</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Email *</label>
            <input type="email" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Phone *</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Subject</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Company Name *</label>
            <input type="text" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group full-width">
            <label>Company Email</label>
            <input type="email" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group full-width">
            <label>Content *</label>
            <textarea rows={4} required placeholder="Write your message here"></textarea>
          </div>
        </div>

        <div className="checkbox-row">
          <input type="checkbox" required />
          <span>I agree to the Terms and Privacy Policy</span>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  </div>
</section>
<section class="branch-info-section">
  <div class="branch-header">
    <h2>We have branches in many regions of the world</h2>
    <p>
      We have experience in handling the formalities and documentation required for your imports and exports. 
      We work with all international stations to guarantee that your load will safely reach without any delays.
    </p>
  </div>

  <div class="branch-images">
    <div class="branch-card">
      <img src={building} alt="" />
      <div class="branch-caption">
        <h3> Saudi Arabia</h3>
        <p>Strategic base for GCC logistics and documentation support.</p>
      </div>
    </div>
     <div class="branch-contact-card">
      <h3>Contact Us</h3>
      <p><strong>Address:</strong> King Abdulaziz Road, Riyadh, Saudi Arabia</p>
      <p><strong>Phone:</strong> +966-123-456-789</p>
      <p><strong>Email:</strong>contact@truckplus.sa</p>
    </div>

    <div class="branch-card">
      <img src={dubaiHub} alt="Dubai Hub" />
      <div class="branch-caption">
        <h3>Dubai, UAE</h3>
        <p>Handling customs and freight for Middle East and Asia shipments.</p>
      </div>
    </div>
  </div>
</section>
 <div className="testimonial-section">
      <h2 className="testimonial-title">What Our Clients Say</h2>
      <div className="testimonial-slider-container">
        <button className="arrow left" onClick={prevSlide}>
          &#8592;
        </button>

        <div className="testimonial-slider">
          {visibleTestimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="logo-box">
                <img src={t.logo} alt={t.company} />
              </div>
              <div className="testimonial-content">
                <h3>{t.name}</h3>
                <p className="company">{t.company}</p>
                <p className="description">{t.text}</p>
                <div className="stars">{"★".repeat(t.rating)}</div>
                <div className="rating-box">
                  <span className="support">{t.support}</span>
                  <span className="rate">Rate: {t.rating} / 5</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={nextSlide}>
          &#8594;
        </button>
      </div>
    </div>
     <section className="contact-section">
  <div className="contact-card">
    <h2>Get in Touch</h2>
    <form className="contact-form">
      <div className="form-group">
        <label>Name *</label>
        <input type="text" placeholder="Your Name" required />
      </div>
      <div className="form-group">
        <label>Email *</label>
        <input type="email" placeholder="Your Email" required />
      </div>
      <div className="form-group">
        <label>Address</label>
        <input type="text" placeholder="Your Address" />
      </div>
      <div className="form-group">
        <label>Phone *</label>
        <input type="tel" placeholder="Your Phone" required/>
      </div>
      <div className="form-group">
        <label>Subject</label>
        <input type="text" placeholder="Subject" />
      </div>
      <div className="form-group">
        <label>Company Name *</label>
        <input type="text" placeholder="Company" required/>
      </div>
      <div className="form-group">
        <label>Company Email</label>
        <input type="email" placeholder="Company Email" />
      </div>
      <div className="form-group full-width">
        <label>Content *</label>
        <textarea placeholder="Write your message here" rows="4"  required/>
      </div>
      <div className="form-group checkbox full-width">
        <label>
          <input type="checkbox" required />
          I agree to the Terms and Privacy Policy
        </label>
      </div>
      <div className="form-group full-width">
        <button type="submit">Submit Now</button>
      </div>
      <div className="contact-details full-width">
  <h4>Saudi Arabia</h4>
  <p><strong>Email:</strong>  info@truckplus.sa</p>
  <p><strong>TruckPlus Email:</strong> support@truckplus.com</p> {/* Replace with your actual */}
  <p><strong>Phone:</strong> +966-123-456-789 </p>
  
</div>
    </form>
  </div>
</section>








   </div>
   
 
  );
};

export default ContactPage;
