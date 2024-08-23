import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/home/home.jsx';
import CustomerReg from './components/customer/customerReg.jsx';
import CustomerLogin from './components/customer/customerLogin.jsx'
import ProducerReg from './components/producer/producerReg.jsx'
import ProducerLogin from './components/producer/producerLogin.jsx'


function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login-producer" element={<ProducerLogin />} />
        <Route path="/login-cust" element={<CustomerLogin />} />
        <Route path='/reg-cust' element={<CustomerReg/>}/>
        <Route path="/reg-producer" element={<ProducerReg/>} />
        

      </Routes>
    </Router>
    
    </>
    
    


  );
}

export default App;
