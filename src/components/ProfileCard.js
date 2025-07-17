import React from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
  return (
    <div className="profile-container">
      <div className="profile-cover">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="profile"
          className="profile-picture"
        />
      </div>

      <div className="profile-content">
        <h2 className="profile-name">Gaston Lapierre <span className="verified">✔</span></h2>
        <p className="profile-title">Project Head Manager</p>

        <div className="profile-buttons">
          <button className="message-btn">📩 Message</button>
          <button className="follow-btn">+ Follow</button>
        </div>

        <div className="profile-stats">
          <div className="stat">
            <h4>3+ Years</h4>
            <p>Job<br />Experience</p>
          </div>
          <div className="stat">
            <h4>5</h4>
            <p>Certificate<br />Achieved</p>
          </div>
          <div className="stat">
            <h4>2</h4>
            <p>Internship<br />Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
