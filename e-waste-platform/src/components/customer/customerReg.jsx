import React, { useState } from 'react';
import './customerReg.css';

function CustReg() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
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
        <div className="form-group">
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

        <div className="form-group">
          <label htmlFor="email">email:</label>
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
          <label htmlFor="phoneNumber">phoneNumber:</label>
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
          <label htmlFor="wasteLocationBuilding">wasteLocationBuilding:</label>
          <input
            type="text"
            id="wasteLocationBuilding"
            name="wasteLocationBuilding"
            value={formData.wasteLocationBuilding}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="streetAddress">streetAddress:</label>
          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">city:</label>
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
          <label htmlFor="city">city:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
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

export default CustReg;