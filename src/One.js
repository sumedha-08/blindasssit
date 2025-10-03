import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./One.css";
import CallIcon from '@mui/icons-material/Call';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';

const One = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="logosection">
        <h2 className="logo">BlindAssist</h2>
      </div>
      <ul className="menu">
        <li><Link to="/" onClick={() => setIsOpen(false)}><HomeIcon/> Home</Link></li>
        <li><Link to="/ashram" onClick={() => setIsOpen(false)}><HouseSidingIcon/> Ashram</Link></li>
        <li><Link to="/helpers" onClick={() => setIsOpen(false)}><GroupsIcon/> Helpers</Link></li>
        <li><Link to="/notifications" onClick={() => setIsOpen(false)}><NotificationsIcon/> Notifications</Link></li>
        <li><Link to="/profile" onClick={() => setIsOpen(false)}><AccountCircleIcon/> Profile</Link></li>
        <li><Link to="/contacts" onClick={() => setIsOpen(false)}><CallIcon/> Contact</Link></li>
      </ul>

      {/* Toggle Button */}
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? "X" : "☰"}
      </button>
    </div>
  );
};

export default One;
