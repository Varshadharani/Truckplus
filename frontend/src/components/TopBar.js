import React from 'react';
import '../components/TopBar.css'; // Your custom styles
import { Phone } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span>info@truckplus.sa</span>
      </div>
      <div className="topbar-right">
        <Phone size={16} style={{ marginRight: '6px' }} />
        <span>Call Us: +966-123-456-789 </span>
      </div>
    </div>
  );
};

export default TopBar;
