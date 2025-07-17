import React from 'react';
import Sidebar from './components/Sidebar';
import ProfileBanner from './components/ProfileCard';
import RightHeader from './components/RightHeader';
import PersonalInfoSidebar from './components/PersonalInfoSidebar';
import AboutSection from './components/AboutSection';

const App = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
      
      {/* Left Sidebar */}
      <div style={{ width: '15%', backgroundColor: '#222', color: '#fff' }}>
        <Sidebar />
      </div>

      {/* Center Content */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '30px',
          gap: '20px',
        }}
      >
        <div style={{ width: '80%', maxWidth: '800px' }}>
          <ProfileBanner />
        </div>

        <div
  style={{
    width: '75%',
    maxWidth: '750px',
    backgroundColor: '#ffffff',
    padding: '16px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'center',
    maxHeight: '160px',     // 👈 limit height
    overflow: 'hidden',     // 👈 prevent scrollbar
  }}
>
  <AboutSection />
</div>

      </div>

      {/* Right Section */}
      <div style={{ width: '20%', padding: '20px', backgroundColor: '#f4f4f4' }}>
        <RightHeader />
        <div style={{ marginTop: '20px' }}>
          <PersonalInfoSidebar />
        </div>
      </div>
    </div>
  );
};

export default App;
