
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
        <div className="reg text-end mb-3">
          <ToggleButtonGroup type="radio" name="userType" value={userType} onChange={handleUserTypeChange}>
            <ToggleButton
              id="buyer-toggle"
              value="buyer"
              className='custom-buyer'           >
              Login as Buyer
            </ToggleButton>
            <ToggleButton
              id="seller-toggle"
              value="seller"
              className='custom-seller'
            >
              Login as Seller
            </ToggleButton>
          </ToggleButtonGroup>
        </div>


          <div className="p-4 shadow rounded bg-white">
            <h3 className="text-center mb-4">Sign Up as {userType.charAt(0).toUpperCase() + userType.slice(1)}</h3>
            
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

