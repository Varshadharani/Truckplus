import React, { useState } from "react";
import "../components/WhatAppChat.css";
import whatsappIcon from "../assets/wp.jpeg";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (!message.trim()) return;
    const phoneNumber = "6381967267"; // ✅ Replace with your number
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
    setMessage("");
    setIsOpen(false);
  };

  return (
    <div className="whatsapp-container">
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="whatsapp-icon"
        onClick={togglePopup}
      />

      {isOpen && (
        <div className="whatsapp-popup">
          <div className="popup-header">
            Welcome to TruckPlus
            <span className="close-btn" onClick={togglePopup}>
              ×
            </span>
          </div>
          <div className="popup-body">
            <div className="sub-message">Hi there! 👋 How can we help you?</div>
            <input
              type="text"
              className="chat-input"
              placeholder="Type your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="send-btn" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppChat;