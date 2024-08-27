import React, { useState } from 'react';
import './producerReg.css';

function ProducerReg() {
  
  
  const [formData, setFormData] = useState({
  
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    wasteLocationBuilding: '',
    streetAddress: '',
    city: '',
    password: '',
    confirmPassword: '',
    errorMessage: '',
    wasteOriginClassification: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, errorMessage: ''// Clear error message on change
    });
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
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
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
        <div className="form-g">
          <label htmlFor="firstName">First   
 Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>   
        <div className="form-g">
          <label htmlFor="LastName">Last  
 Name:</label>
          <input
            type="text"
            id="LastName"
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
            required
          />
        </div>  

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
        <label htmlFor="password">Password:</label>   

          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            minLength={8}
            required   

          />
          <p className="password-strength">{checkPasswordStrength(formData.password)}</p>
        
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
       



        {/* Add other form fields similarly */}
        <div className="form-group">
          <label htmlFor="wasteOriginClassification">Waste Origin Classification/Description:</label>
          <textarea
            id="wasteOriginClassification"
            name="wasteOriginClassification"
            value={formData.wasteOriginClassification}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}

export default ProducerReg;