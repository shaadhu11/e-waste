import React from 'react';
import { Button } from 'react-bootstrap';
import './home.css'; // Custom CSS for additional styling

const HomePage = () => {
  const navigateToLogin = () => {
    window.location.href = "/login"; // This is where you'll redirect to your login page
  };

  return (
    <div className="homepage-container">
      <div className="content">
        <div className="text-container">
          <h1>Welcome To <br /> <span className="platform-name">E-Waste Platform.</span></h1>
          <Button className="get-started-btn" onClick={navigateToLogin}>
            Get Started
          </Button>

        </div>
        <div className="image-container">
          <img src="images/bg2.png" alt="Recycle Bin" className="recycle-image" />
          <p className="tagline">REDUCE, REUSE, RECYCLE.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
