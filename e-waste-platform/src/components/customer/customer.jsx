import React, { useState } from 'react';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';


const Buyer = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    eWasteInterest: '',
    certifications: '',
    additionalInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data submitted:', formData);
  };

  return (
    <Container className="mt-5 p-4 border rounded bg-light">
      <h2 className="text-center mb-4">Purchaser Registration</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formBusinessName" className="mb-3">
              <Form.Label>Business Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your business name"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formEWasteInterest" className="mb-3">
              <Form.Label>Type of E-Waste Interested In</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter type of e-waste you are interested in"
                name="eWasteInterest"
                value={formData.eWasteInterest}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="formCertifications" className="mb-3">
          <Form.Label>Certifications or Licenses</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter any certifications or licenses"
            name="certifications"
            value={formData.certifications}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formAdditionalInfo" className="mb-4">
          <Form.Label>Additional Information</Form.Label>
          <Form.Control
            as="textarea"
            
            rows={3}
            placeholder="Provide any additional information"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit">
            Register
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Buyer;
