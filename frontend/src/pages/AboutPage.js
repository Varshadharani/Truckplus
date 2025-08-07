import React, { useState,useEffect } from 'react';
import "../pages/AboutPage.css"; // Import your CSS file for styling
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutBanner from "../assets/aboutbanner.webp"; // Import your banner image
import seaCargo from "../assets/cargo.jpg";
import heavyTransport from "../assets/heavycargo.webp";
import shipImg from "../assets/shiptransport.webp";
import forklift from "../assets/forklifts.jpg";
import patner from "../assets/patner.jpg";
import warehouseImage from '../assets/parcel.jpg';
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from "react-router-dom";

import LTenergy  from "../assets/logo/LTenergy.jpeg";
import alfanar from "../assets/logo/alfanar.jpeg";
import cargo from "../assets/logo/cargo.png";
import dun from "../assets/logo/db.jpeg";
import mawani from "../assets/logo/mawani.jpeg";

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
const brandLogos = [LTenergy,alfanar, cargo,dun];
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


const AboutPage = () => {
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
    <>
     <div className="about-hero">
        <div className="about-hero-content">
          <h1>Know More About TruckPlus</h1>
          <p>Your trusted logistics partner with decades of experience</p>
        </div>
        </div>
   <div className="about-container">
      <div className="about-section">
        <div className="about-image minimized">
          <img src={seaCargo} alt="Cargo Ship" />
        </div>
        <div className="about-text float-text">
          <h2 className="about-heading">
            Simplifying complex shipping challenges with innovative solutions
          </h2>
          <p className="about-description">
            Logistics companies are essential to the smooth functioning of
            global supply chains. They offer a range of services such as
            transportation, warehousing, inventory management, and distribution
            to businesses across different industries. The role of logistics
            companies has become increasingly important in recent years due to
            the growth of e-commerce and global trade.
          </p>
        </div>
      </div>
  <div className="about-section reverse">
  <div className="about-text fade-in-right">
    <h2 className="about-heading">Globally Connected by Large Network</h2>
    <p className="about-paragraph">
      At <strong>Truck Plus</strong>, our mission is to deliver exceptional transportation services that not only meet, but exceed expectations. We are committed to reliability, efficiency, and cost-effectiveness — globally and locally.
    </p>

    <div className="features-list">
      <div className="feature-block">
        <h3 className="feature-title">Cost-Efficient Solutions</h3>
        <p className="feature-text">
          Providing economical logistics strategies without compromising service quality.
        </p>
      </div>
      <div className="feature-block">
        <h3 className="feature-title">Swift & Reliable Delivery</h3>
        <p className="feature-text">
          On-time shipments backed by real-time tracking and operational excellence.
        </p>
      </div>
    </div>
  </div>

  <div className="about-image fade-in-left">
    <img src={shipImg} alt="Global Network" />
  </div>

 

</div>
 <div className="about-section">
  <div className="about-image">
    <img src={forklift} alt="Sea Container" />
  </div>
  <div className="about-text">
    <h2>Globally Connected by Large Network</h2>
    <p>
      Truck Plus was founded in 2005 by a group of transportation professionals who saw an opportunity 
      to provide a better level of service to businesses. Since our founding, we have grown to become 
      a leading transportation provider, with a presence in over 25 countries around the world.
    </p>
    {/* <button className="contact-button">Contact Us</button> */}
  </div>
</div>
<div className="about-section1">
     <div className="about-image1">
    <img src={patner} alt="patner" />
  </div>
   <div className="about-text1">
    <h2>We have established strong relationships with our partners</h2>
    <p>
      We strive to become pioneers in the field, providing first quality and cost-effective service, and smart solutions to the market. Our 25 years’ experience in the shipping, transport and logistics industry is our strength, which support us to deliver our promises to our customers.
    </p>
   
  </div>

 
</div>
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
     
     
     
    </>
  );
};

export default AboutPage;