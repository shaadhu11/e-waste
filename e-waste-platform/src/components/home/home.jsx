// import React from 'react';
// import { Container, Row, Col, Button, Card } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom'; // Update here


// const HomePage = () => {
//   const navigate = useNavigate(); // Update here

//   const handleProducerLogin = () => {
//     navigate('/login-producer');
//   };

//   const handleCustomerLogin = () => {
//     navigate('/login-customer');
//   };

//   return (
//     <Container fluid className="homepage-container d-flex align-items-center justify-content-center">
//       <Card className="text-center shadow-lg p-4 rounded">
//         <Card.Body>
//           <h1 className="homepage-title mb-4">Welcome to the E-Waste Platform</h1>
//           <p className="homepage-subtitle mb-5">Please select your role to log in:</p>
//           <Row>
//             <Col xs={12} md={6} className="mb-3">
//               <Button
//                 variant="primary"
//                 size="lg"
//                 className="w-100 homepage-button"
//                 onClick={handleProducerLogin}
//               >
//                 Login as Producer
//               </Button>
//             </Col>
//             <Col xs={12} md={6} className="mb-3">
//               <Button
//                 variant="secondary"
//                 size="lg"
//                 className="w-100 homepage-button"
//                 onClick={handleCustomerLogin}
//               >
//                 Login as Customer
//               </Button>
//             </Col>
//           </Row>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default HomePage;





























import React, { useState } from 'react';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import './home.css'

const HomePage = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  return (
    <div className="homepage-background d-flex justify-content-center align-items-center vh-100">
      <div className="content text-center">
        <h1>Welcome to Our E-Waste Platform</h1>
        <DropdownButton
          title="Get Started"
          show={showDropdown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          variant="primary"
          id="dropdown-basic-button"
          className="mt-3"
        >
          <Dropdown.Item href="/login-producer">Login as Producer</Dropdown.Item>
          <Dropdown.Item href="/login-cust">Login as Customer</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};

export default HomePage;

