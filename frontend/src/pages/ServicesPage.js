// src/pages/ServicesPage.js
import React from "react";

import "../pages/ServicesPage.css";
import { motion } from "framer-motion";

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

const ServicesPage = () => {
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
      </div>
    
    </>
  );
};

export default ServicesPage;
