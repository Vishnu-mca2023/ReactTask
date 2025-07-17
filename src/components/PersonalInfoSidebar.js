import React from 'react';
import './PersonalInfoSidebar.css';
import {
  FaBriefcase,
  FaUniversity,
  FaMapMarkerAlt,
  FaUsers,
  FaEnvelope,
  FaGlobe,
  FaLanguage,
  FaCheckCircle
} from 'react-icons/fa';

const PersonalInfoSidebar = () => {
  return (
    <div className="personal-info-sidebar">
      <h3 className="section-title">Personal Information</h3>

      <ul className="info-list">
        <li><FaBriefcase /> Project Head Manager</li>
        <li><FaUniversity /> Went to Oxford International</li>
        <li><FaMapMarkerAlt /> Lives in Pittsburgh, PA 15212</li>
        <li><FaUsers /> Followed by <strong>16.6k People</strong></li>
        <li><FaEnvelope /> <a href="mailto:hello@dundermufflin.com">hello@dundermufflin.com</a></li>
        <li><FaGlobe /> <a href="https://www.larkon.co" target="_blank" rel="noreferrer">www.larkon.co</a></li>
        <li><FaLanguage /> Language: <strong>English, Spanish, German</strong></li>
        <li><FaCheckCircle className="status-icon" /> <span className="active-status">Status: Active</span></li>
      </ul>
    </div>
  );
};

export default PersonalInfoSidebar;
