// src/pages/ServicesPage.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../pages/ServicesPage.css";
import { motion } from "framer-motion";
import { FaTruck, FaSmile, FaGlobe, FaBoxes } from "react-icons/fa";

import img1 from "../assets/shipfrieght.png";
import img2 from "../assets/airfrieght.avif";
import img3 from "../assets/transportfrieght.jpeg";
import img4 from "../assets/valueadd.jpg";
import icon1 from "../assets/serviceicon1.png";
import icon2 from "../assets/serviceicon2.png";
import icon3 from "../assets/serviceicon3.jpg";
import icon4 from "../assets/serviceicon4.png";
import icon5 from "../assets/serviceicon1.png";
import icon6 from "../assets/serviceicon2.png";
import certifiedIcon from '../assets/certified.jpg';
import airtruck from '../assets/air-truck-ship.webp';
import shipocean from '../assets/ship-ocean.avif';

import trckfloat from '../assets/truckfloat.jpg';



const icons = [icon1, icon2, icon3, icon4, icon5, icon6];

const serviceContent = [
  {
    title: "Sea Freight Custom Clearance",
    description:
      "TruckPlus sea freight solutions handle all cargo types—from standard containers to specialized equipment—ensuring global coverage and reliable delivery. We offer project forwarding, heavy lift chartering, Mafi & Ro-Ro services, and specialized handling for flat racks, open tops, reefers, and more, including door-to-door delivery.",
    image: img1,
    reverse: false,
  },
  {
    title: "Air Freight Custom Clearance",
    description:
      "TruckPlus offers tailored air freight solutions for time-sensitive shipments. We handle project and engineering cargo, heavy/overweight goods, and temperature-controlled items. With strong carrier partnerships, we ensure global door-to-door delivery, fast turnaround, and secure cargo handling.",
    image: img2,
    reverse: true,
  },
  {
    title: "Project Logistics",
    description:
      "We provide end-to-end project logistics for complex, large-scale cargo. Our expertise includes heavy lift and ODC handling, multimodal transport (road, sea, air, rail), breakbulk cargo, and total logistics solutions across sectors like energy, construction, oil & gas, and infrastructure.",
    image: img3,
    reverse: false,
  },
  {
    title: "Value Added Services",
    description:
      "TruckPlus offers support services like feasibility studies, route surveys, loading plans, hydrographic analysis, civil works, real-time tracking, and customs clearance. Our value-added services optimize every phase of the cargo lifecycle, from origin to final destination.",
    image: img4,
    reverse: true,
  },
];

const faqData  = [
  {
    question: 'Which Shipping Methods Are Available?',
    answer:
      'At TruckPlus, we offer a diverse range of efficient and reliable shipping methods tailored to meet the unique needs of our valued customers. Our comprehensive selection includes both domestic and international options, designed to ensure that your goods reach their intended destinations promptly and securely.'
  },
  {
    question: 'Do You Ship Internationally?',
    answer:
      'Absolutely, we’re pleased to inform you that we do offer international shipping services at TruckPlus. Whether sending packages to neighboring countries or across continents, our experienced team is well-versed in navigating international regulations, customs procedures, and logistics intricacies.'
  },
  {
    question: 'How Long Will It Take To Get My Package?',
    answer:
      'At TruckPlus, we understand the significance of timely deliveries. Delivery time varies based on shipping method, location, and customs procedures for international shipments.'
  },
  {
    question: 'What Payment Methods Are Accepted?',
    answer:
      'We accept major credit and debit cards, including Visa, MasterCard, American Express, and Discover, allowing you to securely complete transactions online or over the phone.'
  },
  {
    question: 'Is Buying On-Line Safe?',
    answer:
      'Absolutely. At TruckPlus, we prioritize the protection of your personal and financial information using robust encryption technology to safeguard all transactions.'
  }
];



 

const ServicesPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [count, setCount] = useState({
  packages: 0,
  clients: 0,
  countries: 0,
  tons: 0,
});
 const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

useEffect(() => {
  const target = { packages: 2216, clients: 875, countries: 10, tons: 480 };
  const duration = 2000; // total animation duration in ms
  const steps = 60;
  let currentStep = 0;

  const interval = setInterval(() => {
    currentStep++;
    setCount({
      packages: Math.min(Math.floor((target.packages / steps) * currentStep), target.packages),
      clients: Math.min(Math.floor((target.clients / steps) * currentStep), target.clients),
      countries: Math.min(Math.floor((target.countries / steps) * currentStep), target.countries),
      tons: Math.min(Math.floor((target.tons / steps) * currentStep), target.tons),
    });

    if (currentStep >= steps) clearInterval(interval);
  }, duration / steps);
}, []);

const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    commodity: '',
    delivery: '',
    weight: '',
    quantity: '',
    expressDelivery: false,
    packaging: false,
    insurance: false,
    note: ''
  });

  const [quoteTotal, setQuoteTotal] = useState(0);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const calculateQuote = () => {
    let basePrice = 100; // base quote logic
    if (formData.expressDelivery) basePrice += 40;
    if (formData.packaging) basePrice += 15;
    if (formData.insurance) basePrice += 20;
    setQuoteTotal(basePrice);
  };

  const handleQuoteSubmit  = (e) => {
    e.preventDefault();
    calculateQuote();
    // You can console.log(formData) here or send it to an API
  };
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
    <>
     
      <div className="services-page">
        <section>
        <div className="services-header">
          <h1>Our Services</h1>
          <p>We have been pioneering the industry in middle east for 27 years, and delivering value<br/>
products within given timeframe, every single time.</p>
        </div>
        </section>
        <section className="services-section">
            {serviceContent.map((item, index) => (
        <motion.div
          key={index}
          className={`service-row ${item.reverse ? "reverse" : ""}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="service-image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="service-content">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </motion.div>
      ))}
        </section>
        <div className="sector-header">
        <h2>
          Proud to <span>deliver excellence</span><br /> across key sectors
        </h2>
        <p>Explore our specialized domains of operation</p>
      </div>
      <div className="sector-icons">
        {icons.map((icon, index) => (
          <div key={index} className="icon-card">
            <img src={icon} alt={`Sector ${index + 1}`} />
          </div>
        ))}
      </div>
    <section className="tp-section">
  <div className="tp-content">
    <div className="tp-images">
      <div className="tp-top-image-wrapper">
        <img src={airtruck} alt="Air, Truck, Ship" className="tp-main-image" />
      </div>

      {/* Certified icon between images */}
      <div className="tp-certified-icon-glassy">
        <img src={certifiedIcon} alt="Certified Icon" />
      </div>

      <div className="tp-bottom-image">
        <img src={shipocean} alt="Cargo Ship" />
      </div>
    </div>

    <div className="tp-text">
      <h2 className="tp-title">Proudly Delivering Excellence</h2>
      <p className="tp-description">
        We are committed to delivering exceptional service through precision, reliability, and innovation.
        With a team of industry experts, we uphold the highest standards to ensure excellence in every project.
      </p>

      <div className="tp-features">
        <div className="tp-feature">
          <div className="tp-feature-icon">🚚</div>
          <div className="tp-feature-text">
            <h4>Boost Your Sales</h4>
            <p>Cutting‑edge solutions to elevate your brand and drive conversions.</p>
          </div>
        </div>
        <div className="tp-feature">
          <div className="tp-feature-icon">⚙️</div>
          <div className="tp-feature-text">
            <h4>Introducing New Features</h4>
            <p>Modern aesthetics and high‑quality templates to enhance your business.</p>
          </div>
        </div>
      </div>

     <Link to="/contact" className="contact-btn">Contact Us</Link>
    </div>
  </div>
</section>

 <section className="truck-stats-section">
      <div className="truck-stats-overlay">
        <div className="truck-stats-title">
         <h2>We take care about transportation</h2>
<p>for your business</p>

        </div>
        <div className="truck-stats-grid">
          <div className="stat-card glassy">
            <FaTruck className="stat-icon" />
            <h3>{count.packages}</h3>
            <p>Delivered Packages</p>
          </div>
          <div className="stat-card glassy">
            <FaSmile className="stat-icon" />
            <h3>{count.clients}</h3>
            <p>Satisfied Clients</p>
          </div>
          <div className="stat-card glassy">
            <FaGlobe className="stat-icon" />
            <h3>{count.countries}</h3>
            <p>Countries Covered</p>
          </div>
          <div className="stat-card glassy">
            <FaBoxes className="stat-icon" />
            <h3>{count.tons}</h3>
            <p>Tons of Goods</p>
          </div>
        </div>
      </div>
    </section>

    <div className="trusted-heading-wrapper">
  <h2 className="trusted-heading">
    World’s Leading Companies<br />For Over 25 Years.
  </h2>
</div>

<section className="quote-section">
      <div className="quote-container">
        {/* Left: Quote Form */}
        <div className="quote-form">
          <h2>Get a Quote</h2>
          <p>Please fill in the details to receive a tailored quote for your shipping needs.</p>
          <form className="form-grid" onSubmit={handleQuoteSubmit }>
  <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
  <input type="email" name="email" placeholder="Your email address" value={formData.email} onChange={handleChange} required />

  <select name="service" value={formData.service} onChange={handleChange} required>
    <option value="">Select Service</option>
    {[...Array(10)].map((_, i) => (
      <option key={i} value={`Service ${i + 1}`}>Service {i + 1}</option>
    ))}
  </select>

  <select name="commodity" value={formData.commodity} onChange={handleChange} required>
    <option value="">Select Commodity</option>
    {[...Array(10)].map((_, i) => (
      <option key={i} value={`Commodity ${i + 1}`}>Commodity {i + 1}</option>
    ))}
  </select>

  <select name="delivery" value={formData.delivery} onChange={handleChange}>
    <option value="">Delivery To</option>
    {[...Array(10)].map((_, i) => (
      <option key={i} value={`Delivery ${i + 1}`}>Delivery {i + 1}</option>
    ))}
  </select>

  <select name="quantity" value={formData.quantity} onChange={handleChange}>
    <option value="">Quantity of Goods</option>
    {[...Array(100)].map((_, i) => (
      <option key={i} value={i + 1}>{i + 1}</option>
    ))}
  </select>
<input
  type="text"
  name="weight"
  placeholder="Weight (kg)"
  value={formData.weight}
  onChange={handleChange}
  className="input-weight"
/>



  {/* Stylish Checkbox Group */}
 <div className="checkbox-group">
  <label>
    <input type="checkbox" name="expressDelivery" checked={formData.expressDelivery} onChange={handleChange} />
    Express Delivery (+$40)
  </label>
  <label>
    <input type="checkbox" name="packaging" checked={formData.packaging} onChange={handleChange} />
    Packaging (+$15)
  </label>
  <label>
    <input type="checkbox" name="insurance" checked={formData.insurance} onChange={handleChange} />
    Add Insurance (+$20)
  </label>
</div>


  <textarea name="note" rows="4" placeholder="Message / Note" value={formData.note} onChange={handleChange}></textarea>

  <button type="submit" className="quote-submit">Get a quote</button>
</form>

          {quoteTotal > 0 && (
            <div className="quote-result">
              <h3>Estimated Quote: ${quoteTotal}</h3>
            </div>
          )}
        </div>

        {/* Right: Parallax Floating Truck Image */}
        <div className="quote-image">
          <img src={trckfloat} alt="Truck" />
        </div>
      </div>
    </section>

   <section className="faq-section">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <h4>{faq.question}</h4>
                  <span>{activeIndex === index ? "-" : "+"}</span>
                </div>
                {activeIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
    
  <section className="contact-section">
  <div className="contact-card"  onsubmit={handleSubmit}>
    <h2>Get in Touch</h2>
    <form className="contact-form">
      <div className="form-group">
        <label>Name *</label>
        <input type="text" placeholder="Your Name" required/>
      </div>
      <div className="form-group">
        <label>Email *</label>
        <input type="email" placeholder="Your Email" required/>
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
        <textarea placeholder="Write your message here" rows="4" required/>
      </div>
      <div className="form-group checkbox full-width">
        <label>
          <input type="checkbox" required/>
          I agree to the Terms and Privacy Policy
        </label>
      </div>
      <div className="form-group full-width">
        <button type="submit">Submit Now</button>
      </div>
      <div className="contact-details full-width">
  <h4>Jizan</h4>
  <p><strong>Address:</strong>  8653 almrooj 2, king khaled
bn abdulazizi 82633</p>
  <p><strong> Email:</strong> info@truckplus.sa</p> {/* Replace with your actual */}
  <p><strong>Phone:</strong> +966-50-483-0785 </p>
  
</div>
    </form>
  </div>
</section>




      </div>
    
    </>
  );
};

export default ServicesPage;
