import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './home.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="homepage-background d-flex justify-content-center align-items-center vh-100">
      <div className="content text-center">
        <h1>Welcome to Our E-Waste Platform</h1>
        <Button
          variant="primary"
          className="mt-3 get-started-btn"
          onClick={handleLoginRedirect}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
