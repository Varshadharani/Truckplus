import React, { useState,useRef, useEffect } from 'react';
import { Link } from "react-router-dom";

import aeroplaneImage from '../assets/Aeroplane1.jpg';
import shipImage from '../assets/ship1.jpg';
import shipAvifImage from '../assets/ship.avif';
import craneImage from '../assets/ship2.jpg';
import ship3Image from '../assets/ship3.jpg';
import shippingTechImage from '../assets/shippingTech.jpeg';
import warehouseImage from '../assets/parcel.jpg';
import enquiryImage from '../assets/enquiry.png';
import collectionImage from '../assets/collection.png';
import conformationImage from '../assets/conformation.jpeg';
import operationsImage from '../assets/operation.jpeg';
import invoicingImage from '../assets/invoicing.jpg';
import customImage from '../assets/custom.jpeg';
import truck1 from '../assets/truckicon/truck1.png';
import truck2 from '../assets/truckicon/truck2.png';
import truck3 from '../assets/truckicon/truck3.png';
import truck4 from '../assets/truckicon/truck4.png';
import truck5 from '../assets/truckicon/truck5.png';
import truck6 from '../assets/truckicon/truck6.png';
import truck7 from '../assets/truckicon/truck7.png';
import truck8 from '../assets/truckicon/truck8.png';
import truck9 from '../assets/truckicon/truck9.png';
import truck10 from '../assets/truckicon/truck10.jpeg';
import excellence1 from '../assets/truckfloat.jpg';
import excellence2 from '../assets/bigload.jpeg';
import excellence3 from '../assets/heavytrans.jpeg';
import excellence4 from '../assets/jacking.jpg';
import trust1 from '../assets/trust1.jpeg';
import trust2 from '../assets/trust2.png';
import trust3 from '../assets/trust3.png';
import trust4 from '../assets/trust4.png';
import trckfloat from '../assets/truckfloat.jpg';
import truckVideo  from '../assets/truck-night.mp4';
// Truck Gallery Assets

import g1 from '../assets/gallery/truck1.jpg';
import g2 from '../assets/gallery/truck2.jpg';
import g3 from '../assets/gallery/truck3.jpg';
import g4 from '../assets/gallery/truck4.jpg';
import g5 from '../assets/gallery/truck5.avif';
import g6 from '../assets/gallery/truck6.jpg';
import g7 from '../assets/gallery/truck7.jpg';
import g8 from '../assets/gallery/truck8.jpeg';
import g9 from '../assets/gallery/truck9.jpeg';
import g10 from '../assets/gallery/truck10.avif';
import g11 from '../assets/gallery/truck11.avif';
import g12 from '../assets/gallery/truck12.jpg';
import g13 from '../assets/gallery/truck13.jpg';
import g14 from '../assets/gallery/truck14.jpg';
import g15 from '../assets/gallery/truck15.jpg';

// Add this array at the top (outside the component function)

import { FaTruck, FaSmile, FaGlobe, FaBoxes } from "react-icons/fa";
import './HomePage.css'; // Assuming you have a CSS file for styling

const slides = [
  { image: aeroplaneImage, text: 'We specialize in providing seamless, efficient, and tailored transport solutions to meet a wide range of logistical needs.' },
  { image: shipImage, text: 'TruckPlus roots are in Warehouse & Distribution! Whether it’s full containers, consolidations, roll-on/roll-off equipment.' },
  { image: shipAvifImage, text: 'TruckPlus ensures your cargo moves smoothly by sea with world-class shipping services.' },
  { image: craneImage, text: 'TruckPlus Heavy Lift Team lifts and installs cargo from 10 to 1,500 tons with advanced, specialized equipment.' },
  { image: ship3Image, text: 'TruckPlus provides advanced jacking and skidding systems, essential for positioning generators, transformers, and turbines onto foundations.' },
];

const fleetItems = [
  { icon: truck1, title: '1 TON DYNA' },
  { icon: truck2, title: '3 TON DYNA' },
  { icon: truck3, title: '7 TON LORRY' },
  { icon: truck4, title: '10 TON TRUCK' },
  { icon: truck5, title: '12m FLATBED' },
  { icon: truck6, title: '15m FLATBED' },
  { icon: truck7, title: '24m EXTENDABLE FLATBED' },
  { icon: truck8, title: '40FT CONTAINER' },
  { icon: truck9, title: '15m SIDE GRILL' },
  { icon: truck10, title: '13.6m CLOSED BOX' },
  { icon: truck1, title: '15m CLOSED BOX' },
  { icon: truck2, title: 'LOW BED 40 TON' },
  { icon: truck3, title: 'HYDRAULIC LOW BED' },
  { icon: truck4, title: 'BOOM TRUCK 10 TON' },
  { icon: truck5, title: 'BOOM TRUCK 15 TON' },
  { icon: truck6, title: 'TRIPPER 2XL' },
  { icon: truck7, title: 'TRIPPER 3XL' },
  { icon: truck8, title: 'REEFER 5 TON' },
  { icon: truck9, title: 'REEFER 10 TON' },
  { icon: truck10, title: 'REEFER 13.6m' },
  { icon: truck1, title: 'CURTAIN SIDE 13.6m' },
  { icon: truck2, title: 'CURTAIN SIDE 15m' },
  { icon: truck3, title: '20FT CONTAINER' },
  { icon: truck4, title: '1 TON PICKUP' },
];

const galleryImages = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [showText, setShowText] = useState(false);
const animatedText =  "Driving the Future of Freight";
  const videoRef = useRef(null);


  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // 👇 Add scroll listener for parallax
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY * 0.3;
      setParallaxOffset(offset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

useEffect(() => {
  const interval = setInterval(() => {
    setShowText(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, 10000); // repeat every 10 sec

  return () => clearInterval(interval);
}, []);

const handleVideoEnd = () => {
  setTimeout(() => {
    setShowText(true);
  }, 500); // wait before text appears
};
//gallery slider auto-scroll
useEffect(() => {
  const slider = window.gallerySlider;
  let scrollAmount = 0;
  const speed = 2; // pixels per tick
  const interval = 20; // ms (lower = faster)

  const autoSlide = setInterval(() => {
    if (slider) {
      scrollAmount += speed;
      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
      }
      slider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, interval);

  return () => clearInterval(autoSlide);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateQuote();
    // You can console.log(formData) here or send it to an API
  };


  

 return (
  <>
<div className="intro-banner">
  <video
    ref={videoRef}
    src={truckVideo}
    autoPlay
    muted
    loop
    playsInline
    className="truck-video"
  />
  <h1 className="animated-heading">
    {"Driving the Future of Freight".split(" ").map((word, index) => (
      <span
        key={index}
        className="fade-in-word"
        style={{ animationDelay: `${index * 0.4}s` }}
      >
        {word}
      </span>
    ))}
  </h1>
</div>



   
  <section className="about-section">
  {/* <h2>About US</h2> */}
  <h1>Welcome to <strong>TruckPlus</strong></h1>
  <p>
    TruckPlus is a Global logistics company, one that is backed by in-depth knowledge of the field, decades of experience, and dedicated expert employees. 
    We specialize in Project Logistics, Road Transportation, and Transport Engineering & Forwarding, General Freight Forwarding, Global Freight Management, Warehousing.
    TruckPlus comprises a robust in-house team that offers holistic solutions to our customers. 
    Our leaders hold an extensive experience of over multiple decades and have expertise in executing the most challenging and complex global projects.

    <br /><br />
    We analyze our clients’ unique requirements and offer highly customized solutions in accordance with their logistics requirements.
    We cater to multiple sectors – Oil and Gas, Heavy Engineering, Power/Energy, Infrastructure, Petrochemicals, Automotive, Steel, and Cement industries.
    All our workplaces integrate a sturdy international network with native experience, thereby adding value and providing top-notch services to our customers, effectively and securely.

    <br /><br />
    A 27-year-old company which deals in super heavy lift, transportation, and lifting.
    A giant fleet of the latest instrumentation technology and an in-house engineering team makes us a preferred choice among the most reputed EPC companies.
    The top-class fleet list below helps us accomplish world-class projects, which allows us to offer flexibility to our customers for flawless execution.
  </p>
      </section>
 <section className="gallery-section">
  <div className="gallery-title">
    <h2>Our Gallery</h2>
    <p>Explore our latest trucks and logistics operations in action.</p>
  </div>

  <div className="gallery-slider-container" ref={(el) => (window.gallerySlider = el)}>
    {galleryImages.map((img, index) => (
      <div key={index} className="gallery-slide">
        <img src={img} alt={`Truck ${index + 1}`} />
      </div>
    ))}
  </div>
</section>



  <section className="vision-mission-values">
        <div className="vmv-card">
          <h3>Our Vision</h3>
          <p>Our values reflect our principles and define our organizational culture as a cohesive and efficient team.</p>
        </div>

        <div className="vmv-card">
          <h3>Our Mission</h3>
          <p>Our mission is to serve our clients with the highest standards of quality and integrity, utilizing state-of-the-art equipment and a highly experienced team.</p>
        </div>

        <div className="vmv-card">
          <h3>Values</h3>
           <p>
      Our values reflect our principles and define our organizational culture as a cohesive and efficient team.
    </p>
          <ul className="value-list">
            <li><svg width="16" height="16" fill="#f97316"><path d="M13.485 1.929a.75.75 0 011.06 1.06l-8.25 8.25a.75.75 0 01-1.06 0L.985 6.99a.75.75 0 111.06-1.06L5.75 9.19l7.735-7.26z"/></svg> Safety</li>
            <li><svg width="16" height="16" fill="#f97316"><path d="M13.485 1.929a.75.75 0 011.06 1.06l-8.25 8.25a.75.75 0 01-1.06 0L.985 6.99a.75.75 0 111.06-1.06L5.75 9.19l7.735-7.26z"/></svg> Integrity</li>
            <li><svg width="16" height="16" fill="#f97316"><path d="M13.485 1.929a.75.75 0 011.06 1.06l-8.25 8.25a.75.75 0 01-1.06 0L.985 6.99a.75.75 0 111.06-1.06L5.75 9.19l7.735-7.26z"/></svg> Reliability</li>
          </ul>
        </div>
      </section>
  <section className="heavy-services">
        <div className="service-card">
          <div className="icon">🚛</div>
          <p>
            The TruckPlus Heavy Lift Division specializes in advanced heavy lifting and engineered transport solutions, utilizing a diverse fleet that includes extendable trailers, modular trailers, and self-propelled transporters. Our expert engineering team conducts thorough technical assessments, develops strategic plans, and executes projects with precision to optimize efficiency while minimizing time and costs. Committed to safety and reliability, TruckPlus delivers seamless logistical solutions through the expertise of our dedicated professionals. Continuous training and certification.
          </p>
        </div>
        <div className="service-card">
          <div className="icon">✈️</div>
          <p>
            With over 12 years of expertise in air freight logistics, we have built a reputation as a trusted global partner, delivering fast, efficient, and reliable shipping solutions. Our deep industry knowledge and commitment to excellence enable us to serve diverse sectors, including e-commerce, manufacturing, pharmaceuticals, automotive, and technology. With a proven track record of managing over 100,000 air shipments, we optimize routes, reduce transit times, and ensure secure, timely deliveries, empowering businesses to succeed in a competitive global market.
          </p>
        </div>
        <div className="service-card">
          <div className="icon">🏗️</div>
          <p>
            At TruckPlus Heavy Lift, we take pride in delivering industry-leading heavy lifting and installation services, backed by our specialized fleet of advanced equipment. Our cutting-edge machinery is engineered to handle a wide range of heavy cargo, from 10 tons to an impressive 1,500 tons, ensuring we can meet the demands of even the most complex projects. Our heavy lift fleet features state-of-the-art cranes, hydraulic gantries, strand jacks, and modular trailers, all designed to provide safe, efficient, and precision-driven lifting solutions tailored to your needs.
          </p>
        </div>
      </section>
  <section className="workforce-banner">
  <p className="subtext">Delivering Results for Industry Leaders</p>
  <h2 className="main-heading">
    We are proud of our workforce <br />
    and have worked hard.
  </h2>
      </section>
  <section className="fast-shipping-section">
  <div
    className="shipping-image"
    style={{ backgroundImage: `url(${aeroplaneImage})` }}
  ></div>

  <div className="shipping-content">
    <h2>Fast Shipping with Cutting-Edge Technology</h2>
    <p>
      Over the years, we have strategically expanded our network of partners to
      enhance reliability and consistency in our services. Simultaneously, we
      have made significant advancements in integrating state-of-the-art
      technology into our processes, providing clients with greater transparency
      and real-time insights into every engagement.
    </p>
    <div className="features-grid">
      <ul>
        <li>✔️ Task Tracking</li>
        <li>✔️ Task Visualization</li>
        <li>✔️ Deadline Management</li>
      </ul>
      <ul>
        <li>✔️ Task Dependencies</li>
        <li>✔️ File Sharing & Collaboration</li>
        <li>✔️ Time Tracking</li>
      </ul>
    </div>
  </div>
      </section>
  <section className="excellence-section">
  <div className="excellence-content-wrapper">
    <div className="excellence-content">
      <h2>Proudly Delivering <br /> Excellence Every Time</h2>
      <p>
        We are committed to delivering exceptional service through precision, reliability, and innovation.
        With a team of industry experts, we consistently uphold the highest standards to ensure excellence in every project.
        Our unwavering dedication to quality and efficiency allows us to exceed client expectations and drive long-term success.
      </p>

      <div className="features-excellence">
        <div>
          <h4><svg width="20" height="20" fill="currentColor"><path d="M2 10h16v2H2v-2zm0-6h16v2H2V4zm0 12h16v2H2v-2z"/></svg> Boost Your Sales</h4>
          <p>
            Harness the power of cutting-edge design trends combined with meticulously crafted templates
            to elevate your brand and drive conversions.
          </p>
        </div>
        <div>
          <h4><svg width="20" height="20" fill="currentColor"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 4h2v5H9V4zm0 6h2v2H9v-2z"/></svg> Introducing New Features</h4>
          <p>
            Experience the latest innovations, seamlessly blending modern aesthetics with expertly designed,
            high-quality templates to enhance your business.
          </p>
        </div>
      </div>

<Link to="/contact" className="contact-btn">Contact Us</Link>

    </div>
  </div>

  <div
    className="excellence-image"
    style={{ backgroundImage: `url(${warehouseImage})` }}
  ></div>
      </section>
 <section className="how-it-works-section">
  <h2>How It Works</h2>

  <div className="stage-row">
    <div className="stage-card">
      <div className="stage-icon">
        <img src={enquiryImage} alt="Enquiry Stage" className="stage-img" />
      </div>
      <h3>Enquiry Stage</h3>
      <p>Customers submit requests via the website, social media, or email. A quotation is prepared and sent for client approval, which must be confirmed via official email.</p>
    </div>

    <div className="stage-card">
      <div className="stage-icon">
        <img src={conformationImage} alt="Confirmation Stage" className="stage-img" />
      </div>
      <h3>Confirmation Stage</h3>
      <p>All clearance documents are gathered, and a checklist is prepared with vessel arrival dates. The client must make all clearance-related payments to avoid demurrage.</p>
    </div>

    <div className="stage-card">
      <div className="stage-icon">
        <img src={customImage} alt="Customs Clearance Stage" className="stage-img" />
      </div>
      <h3>Customs Clearance Stage</h3>
      <p>Once the pull-out is completed, an email confirmation is sent to the operations team.</p>
    </div>
  </div>

  <div className="stage-row">
    <div className="stage-card">
      <div className="stage-icon">
        <img src={operationsImage} alt="Operations Stage" className="stage-img" />
      </div>
      <h3>Operations Stage</h3>
      <p>Warehouse verifies order details, conducts quality check, securely packs items and updates delivery status.</p>
    </div>

    <div className="stage-card">
      <div className="stage-icon">
        <img src={invoicingImage} alt="Invoicing Stage" className="stage-img" />
      </div>
      <h3>Invoicing Stage</h3>
      <p>All relevant documents are provided. A proforma invoice is shared, and the final invoice is generated.</p>
    </div>

    <div className="stage-card">
      <div className="stage-icon">
        <img src={collectionImage} alt="Collection Stage" className="stage-img" />
      </div>
      <h3>Collection Stage</h3>
      <p>Payment is securely processed via Payoneer, PayPal, or cards. A successful transaction confirms order completion.</p>
    </div>
  </div>
      </section>
 <section className="fleet-section">
  <h2 className="fleet-heading">OUR FLEET</h2>
  <div className="fleet-grid">
    {fleetItems.map((item, index) => (
      <div key={index} className="fleet-card">
        <img src={item.icon} alt={item.title} className="fleet-icon" />
        <p className="fleet-title">{item.title}</p>
      </div>
    ))}
  </div>
</section>

<section className="equipment-section">
  <div className="equipment-container">
    <div className="equipment-column">
      <h3>Flatbeds</h3>
      <ul>
        <li>12m Flatbeds</li>
        <li>24m Flatbeds</li>
      </ul>
      <h3>Extendable Flatbeds</h3>
      <ul>
        <li>12m</li>
        <li>18m</li>
        <li>24m</li>
        <li>36m Extendable Flatbeds</li>
      </ul>
    </div>

    <div className="equipment-column highlighted">
      <h3>Low Beds</h3>
      <ul>
        <li>25-ton Low Beds</li>
        <li>30–50-ton Low Beds</li>
        <li>70-ton Low Beds</li>
        <li>Hydraulic Low Beds</li>
        <li>Custom-built Low Beds</li>
        <li>Accessories</li>
      </ul>
      <h3>Custom-built Flatbeds & Accessories</h3>
      <ul>
        <li>Removable Saddles</li>
        <li>Accessories</li>
      </ul>
    </div>

    <div className="equipment-column">
      <h3>Heavy Transportation Trailers</h3>
      <ul>
        <li>Prime Movers</li>
        <li>Self-Propelled Transporters</li>
        <li>Power Pack Units</li>
        <li>Axle Lines</li>
        <li>Gantry Systems</li>
        <li>Jack-Up Systems</li>
      </ul>
    </div>

    <div className="equipment-column">
      <h3>Additional Equipment</h3>
      <ul>
        <li>Boom Trucks</li>
        <li>Dynas</li>
        <li>27m³ Dump Trucks</li>
        <li>Reach Stackers</li>
        <li>Stone Handlers</li>
        <li>Beams</li>
        <li>Steel Plates</li>
      </ul>
    </div>

    <div className="equipment-column">
      <h3>Forklifts</h3>
      <ul>
        <li>5 tons</li>
        <li>7 tons</li>
        <li>20 tons</li>
        <li>25 tons</li>
      </ul>
      <h3>Cranes</h3>
      <ul>
        <li>50 tons</li>
        <li>70 tons</li>
        <li>100 tons</li>
      </ul>
    </div>
  </div>
</section>


<div className="what-done-section">
  <div className="what-done-overlay"></div>
  <h2 className="what-done-title">What We Have Done - <span className="highlight">TRUCKPLUS</span></h2>

  <div className="cards-wrapper">
    <div className="done-card parallax-card">
      <img src={excellence1} alt="General Transportation" className="done-image" />
      <div className="done-content">
        <h3>GENERAL TRANSPORTATION</h3>
        <p>
          Truckplus General Transport specializes in handling a wide range of general cargo shipments,
          including containerized freight (GP, HC, OT, FR) and breakbulk. With a fleet of lowbeds,
          flatbeds, multi-axles, and extendable trailers, we transport all cargo sizes across industries.
        </p>
      </div>
    </div>

    <div className="done-card parallax-card">
      <img src={excellence2} alt="Rig Moving" className="done-image" />
      <div className="done-content">
        <h3>RIG MOVING OPERATIONS</h3>
        <p>
          At Truckplus, we provide reliable rig movement services from port to site with planning,
          mobilization, and safety compliance through a dedicated logistics team.
        </p>
      </div>
    </div>

    <div className="done-card parallax-card">
      <img src={excellence3} alt="Heavy Transport" className="done-image" />
      <div className="done-content">
        <h3>HEAVY TRANSPORT</h3>
        <p>
          Truckplus’s heavy lift division manages equipment like modular trailers and self-propelled
          transporters, ensuring the engineered movement of oversized cargo across all terrains.
        </p>
      </div>
    </div>

    <div className="done-card parallax-card">
      <img src={excellence4} alt="Jacking and Skidding" className="done-image" />
      <div className="done-content">
        <h3>JACKING AND SKIDDING</h3>
        <p>
          Truckplus supports jacking/skidding operations for generators, transformers, and other
          power infrastructure using advanced hydraulic systems.
        </p>
      </div>
    </div>
  </div>
</div>

<section className="trusted-companies-section">
  <div className="trusted-overlay">
    <h2 className="trusted-heading">World’s Leading Companies For Over 25 Years.</h2>
    <p className="trusted-subheading">
      A big opportunity for your business growth. Delivering Results for Industry Leaders.
      We are proud of our work and have worked hard.
    </p>
    <div className="trusted-cards">
      <div className="trusted-card">
        <img src={require("../assets/trust1.jpeg")} alt="Parcels" />
        <h3>+ 3000</h3>
        <p>Parcels Shipped Safely</p>
      </div>
      <div className="trusted-card">
        <img src={require("../assets/trust2.png")} alt="Cities" />
        <h3>+ 27</h3>
        <p>Cities Served Worldwide</p>
      </div>
      <div className="trusted-card">
        <img src={require("../assets/trust3.png")} alt="Clients" />
        <h3>+ 1500</h3>
        <p>Satisfied Clients</p>
      </div>
      <div className="trusted-card">
        <img src={require("../assets/trust4.png")} alt="Companies" />
        <h3>+ 1000</h3>
        <p>Company We Help</p>
      </div>
    </div>
  </div>
</section>
<section className="quote-section">
      <div className="quote-container">
        {/* Left: Quote Form */}
        <div className="quote-form">
          <h2>Get a Quote</h2>
          <p>Please fill in the details to receive a tailored quote for your shipping needs.</p>
          <form className="form-grid" onSubmit={handleSubmit}>
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
















  </>
);

};

export default HomePage;
