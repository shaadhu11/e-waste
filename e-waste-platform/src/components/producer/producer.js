import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    eWasteType: '',
    complianceStatus: '',
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
    <Container className="mt-5">
      <h2>Waste Producer Registration</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBusinessName">
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

        <Form.Group controlId="formEWasteType">
          <Form.Label>Type of E-Waste Generated</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter type of e-waste"
            name="eWasteType"
            value={formData.eWasteType}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formComplianceStatus">
          <Form.Label>Compliance Status</Form.Label>
          <Form.Control
            as="select"
            name="complianceStatus"
            value={formData.complianceStatus}
            onChange={handleChange}
            required
          >
            <option value="">Select...</option>
            <option value="compliant">Compliant</option>
            <option value="non-compliant">Non-Compliant</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formAdditionalInfo">
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

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default RegistrationForm;
