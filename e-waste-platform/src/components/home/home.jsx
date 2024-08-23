import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Update here
import Customer from './components/customer/customerReg.jsx'
const HomePage = () => {
  const navigate = useNavigate(); // Update here

  const handleProducerLogin = () => {
    navigate('/login-producer');
  };

  const handleCustomerLogin = () => {
    navigate('/login-customer');
  };

  return (
    <Container fluid className="homepage-container d-flex align-items-center justify-content-center">
      <Card className="text-center shadow-lg p-4 rounded">
        <Card.Body>
          <h1 className="homepage-title mb-4">Welcome to the E-Waste Platform</h1>
          <p className="homepage-subtitle mb-5">Please select your role to log in:</p>
          <Row>
            <Col xs={12} md={6} className="mb-3">
              <Button
                variant="primary"
                size="lg"
                className="w-100 homepage-button"
                onClick={handleProducerLogin}
              >
                Login as Producer
              </Button>
            </Col>
            <Col xs={12} md={6} className="mb-3">
              <Button
                variant="secondary"
                size="lg"
                className="w-100 homepage-button"
                onClick={handleCustomerLogin}
              >
                Login as Customer
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

    </Container>
  );
};

export default HomePage;
