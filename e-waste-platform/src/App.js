import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Producer from './components/producer/producer.jsx'
import CustomerReg from './components/customer/customerReg.jsx';
import Customer from './components/customer/customerLogin.jsx'
import ProducerLogin from './components/producer/producerLogin.jsx'
import HomePage from './components/home/home.jsx';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login-producer" element={<ProducerLogin />} />
        <Route path="/login-customer" element={<Customer />} />

        <Route path='/CustomerReg' element={<CustomerReg/>}/>
        <Route path="/reg-producer" element={<Producer/>} />
        

      </Routes>
    </Router>
    
    </>
    
    


    // <div className="App">
    //   <HomePage/>
    //   <Producer/>
    //   <Buyer/>
    // </div>
  );
}

export default App;
