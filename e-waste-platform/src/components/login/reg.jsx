
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import ProducerLogin from '../registration/producer/producerReg.jsx'
import CustomerLogin from '../registration/customer/customerReg.jsx'
import './reg.css'

const Signup = () => {
  const [userType, setUserType] = useState('buyer');

  const handleUserTypeChange = (val) => setUserType(val);

  return (
    <Container fluid className="vh-80 d-flex align-items-center justify-content-center bg-light ">
      <Row className="w-100">
        <Col md={8} lg={6} xl={10} className="mx-auto">
          <div className="text-end mb-3">
            <ToggleButtonGroup type="radio" name="userType" value={userType} onChange={handleUserTypeChange}>
              <ToggleButton id="buyer-toggle" variant="outline-primary" value="buyer">
                Login as Buyer
              </ToggleButton>
              <ToggleButton id="seller-toggle" variant="outline-secondary" value="seller">
                 Login as Seller
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div className="p-4 shadow rounded bg-white">
            <h3 className="text-center mb-4">Sign Up as {userType.charAt(0).toUpperCase() + userType.slice(1)}</h3>
            {/* <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              {userType === 'seller' && (
                <Form.Group controlId="formBasicCompanyName" className="mt-3">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your company name" />
                </Form.Group>
              )}

              <Form.Group controlId="formBasicEmail" className="mt-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-4 w-100">
                Sign Up
              </Button>
            </Form> */}

            {userType === 'seller' && (
              
              <ProducerLogin/>

                
              )}

            {userType === 'buyer' && (
              <CustomerLogin/>
                
              )}  




          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;

