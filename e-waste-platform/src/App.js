import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Producer from './components/producer/producer.jsx'
import Customer from './components/customer/customerReg.jsx';
import Customer from './components/customer/customerLogin.jsx'
import HomePage from './components/home/home.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login-producer" element={<Producer />} />
        <Route path="/login-customer" element={<Customer />} />
        <Route path='/CustomerReg' element={<CustomerReg/>}/>
      </Routes>
    </Router>
    


    // <div className="App">
    //   <HomePage/>
    //   <Producer/>
    //   <Buyer/>
    // </div>
  );
}

export default App;
