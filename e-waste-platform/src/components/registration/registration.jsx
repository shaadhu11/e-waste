   // src/components/RegistrationForm.jsx
   import React, { useState } from 'react';

   function RegistrationForm() {
     const [userType, setUserType] = useState('Producer');

     return (
       <div>
         {/* <select onChange={(e) => setUserType(e.target.value)}>
           <option value="Producer">Producer</option>
           <option value="Buyer">Buyer</option>
           <option value="Admin">Admin</option>
         </select>
         {userType === 'Producer' && <ProducerForm />}
         {userType === 'Buyer' && <BuyerForm />}
         {userType === 'Admin' && <AdminForm />} */}
         <h1>Assalamu Alikum, Bismillahi rahmaanurraheem</h1>
       </div>
     );
   }

   export default RegistrationForm;
   