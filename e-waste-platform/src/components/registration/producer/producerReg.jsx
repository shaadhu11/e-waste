/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import './producerReg.css';
import { Row, Col, Button } from 'react-bootstrap';

function producerReg() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    address: '',
    city: '',
    postalCode: '',
    state: '',
    password: '',
    confirmPassword: '',
    errorMessage: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value,errorMessage: '' });
  };
  const checkPasswordStrength = (password) => {
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':\\|,.<>/?`~]/.test(password);   

    const length = password.length;

    let score = 0;
    if (hasLowerCase) score++;
    if (hasUpperCase) score++;
    if (hasNumber) score++;
    if (hasSpecialChar) score++;
    if (length >= 8) score++;

    switch (score) {
      case 0:
      case 1:
        return 'Weak';
      case 2:
      case 3:
        return 'Moderate';
      case 4:
      case 5:
        return 'Strong';
      default:
        return 'Invalid'; // Handle unexpected cases
   
      }
    
    
};
  


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (formData.password !== formData.confirmPassword) {
      setFormData({ ...formData, errorMessage: 'Passwords do not match' });
      // Focus on the first password field
      document.getElementById('password').focus();
      return;
    }
  };

  return (
    <div className="registration-form">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
      <Row>
      <Col md={6}>
      <div className="form-group">
          <label htmlFor="typeOfWorkGenerator">Types of Waste Generator:</label>
          <select
            id="typeOfWorkGenerator"
            name="typeOfWorkGenerator"
            value={formData.typeOfWorkGenerator}
            onChange={handleChange}
            required
          >
            <option value="">-Select-</option>
            <option value="Corporate">Corporate</option>
            <option value="Educational">Educational</option>
            <option value="Individual Consumer">Individual Consumer</option>
            <option value="Institution">Institution</option>
            <option value="Mall">Mall</option>
            <option value="RWA">RWA</option>
            <option value="Mall">Shop</option>
            <option value="RWA">ULB</option>
          </select>
          
        </div>
        </Col>
        <Col md={6}>
        <div className="form-group">
          <label htmlFor="nameOfCorporateOrInstitution">Name of Corporate/Educational Institution/ULB/Mall/Shop/Individual:</label>
          <input
            type="text"
            id="nameOfCorporateOrInstitution"
            name="nameOfCorporateOrInstitution"
            value={formData.nameOfCorporateOrInstitution}
            onChange={handleChange}
            required
          />
        </div> 
        </Col>
        </Row>
      
      <Row>
      <Col md={6}>
        <div className="form-group">
          <label  
           htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div> 
        </Col>
        <Col md={6}>
        <div className="form-g">
          <label htmlFor="LastName">Last Name:</label>
          <input
            type="text"
            id="LastName"
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
            required
          />
        </div>  
        </Col>
        </Row>
        <Row>
      <Col md={6}>
      <div className="form-g">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        </Col>
        <Col md={6}>
        {/* ... other form fields */}
        <div className="form-group">
          <label htmlFor="phoneNumber">PhoneNumber:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        </Col>
        </Row> <Row>
      <Col md={6}>
      <div className="form-group">
          <label htmlFor="Address">Address:</label>
          <input
            type="text"
            id="Address"
            name="Address"
            value={formData.Address}
            onChange={handleChange}
            required
          />
        </div>
        </Col>
        <Col md={6}>
        {/* ... other form fields */}
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
       </div>
        </Col>
        </Row> <Row>
      <Col md={6}>
      <div className="form-group">
          <label htmlFor="postalcode">Postal code:</label>
          <input
            type="text"
            id="postalcode"
            name="postalcode"
            value={formData.postalcode}
            onChange={handleChange}
            required
          />
        </div>
        </Col>
        <Col md={6}>
        {/* ... other form fields */}
       
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
       </div>
        </Col>
        </Row> <Row>
      <Col md={6}>
      <label htmlFor="password">Password:</label>   
      <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            minLength={8} required
            /> 
            <p className="password-strength">{checkPasswordStrength(formData.password)}</p>
      </div>
        </Col>
        <Col md={6}>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"   

            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            minLength={8}
            required
            className={formData.errorMessage && 'error-input'} // Add error class
          />
           {formData.errorMessage && <p className="error-message">{formData.errorMessage}</p>}
        </div>
        </Col>
        </Row>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default producerReg;