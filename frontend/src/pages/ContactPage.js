import React, { useState,useEffect } from 'react';
import './ContactPage.css'; // Your custom styles
import saudiBanner from '../assets/saudi.webp';

import building from '../assets/building.webp'; // Update with your actual image path
import dubaiHub from '../assets/dubai.jpg';

import 'slick-carousel/slick/slick-theme.css';


import LTenergy  from "../assets/logo/LTenergy.jpeg";

import cargo from "../assets/logo/cargo.png";
import dun from "../assets/logo/db.jpeg";
import mawani from "../assets/logo/mawani.jpeg"; 

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
const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    address: form.address.value,
    subject: form.subject.value,
    company: form.company.value,
    companyEmail: form.companyEmail.value,
    message: form.message.value,
  };

  try {
    const res = await fetch("https://truckplus-1.onrender.com/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if (result.success) {
      alert("✅ Thank you! Your message has been sent.");
      form.reset();
    } else {
      alert("⚠️ Something went wrong. Please try again later.");
    }
  } catch (error) {
    console.error(error);
    alert("❌ Failed to send message.");
  }
};


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
      <form className="form-layout" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Name *</label>
            <input type="text" name="name" required />
          </div>
          <div className="form-group">
            <label>Email *</label>
            <input type="email"name="email" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Phone *</label>
            <input type="text"  name="phone"  required />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" name="address"  />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Subject</label>
            <input type="text" name="subject" />
          </div>
          <div className="form-group">
            <label>Company Name *</label>
            <input type="text" name="company" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group full-width">
            <label>Company Email</label>
            <input type="email"  name="companyEmail"/>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group full-width">
            <label>Content *</label>
            <textarea name="message" rows={4} required placeholder="Write your message here"></textarea>
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
      <p><strong>Address:</strong> 8653 almrooj 2, king khaled bn abdulazizi 82633,Jizan</p>
      <p><strong>Phone:</strong> +966-50-483-0785</p>
      <p><strong>Email:</strong>info@truckplus.sa</p>
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
     








   </div>
   
 
  );
};

export default ContactPage;
