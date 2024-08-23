import React, { useState } from 'react';
import './customerReg.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email:   
 '',
    phoneNumber: '',
    wasteLocationBuilding: '',
    streetAddress: '',
    city: '',
    wasteOriginClassification: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="registration-form">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
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

export default RegistrationForm;