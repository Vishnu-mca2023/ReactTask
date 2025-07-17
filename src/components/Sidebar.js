import React from 'react';
import { FaBox, FaUserShield, FaUserTag, FaUsers, FaStar, FaComments, FaCog, FaCreditCard, FaListAlt, FaCommentsDollar } from 'react-icons/fa';
import { FiUser, FiMessageSquare } from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">Larkon</h2>
      <ul className="menu">
        <li><FaBox className="icon" /> Orders</li>
        <li><FaCreditCard className="icon" /> Purchases</li>
        <li><FaListAlt className="icon" /> Attributes</li>
        <li><FaCommentsDollar className="icon" /> Invoices</li>
        <li><FaCog className="icon" /> Settings</li>

        <li className="section">USERS</li>
        <li className="active"><FiUser className="icon" /> Profile</li>
        <li><FaUserShield className="icon" /> Roles</li>
        <li><FaUserTag className="icon" /> Permissions</li>
        <li><FaUsers className="icon" /> Customers</li>
        <li><FaUserTag className="icon" /> Sellers</li>

        <li className="section">OTHER</li>
        <li><FaStar className="icon" /> Coupons</li>
        <li><FaComments className="icon" /> Reviews</li>

        <li className="section">OTHER APPS</li>
        <li><FiMessageSquare className="icon" /> Chat</li>
      </ul>
    </div>
  );
};

export default Sidebar;


