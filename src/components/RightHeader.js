import React from 'react';
import './RightHeader.css';
import { FaMoon, FaBell, FaClock, FaSearch } from 'react-icons/fa';

const RightHeader = () => {
  return (
    <div className="right-header">
      <FaMoon className="right-icon" />

      <div className="notification-wrapper">
        <FaBell className="right-icon" />
        <span className="notification-dot"></span>
      </div>

      <FaClock className="right-icon" />

      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
};

export default RightHeader;
