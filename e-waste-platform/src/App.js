import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/home/home.jsx';
import Login from './components/login/login.jsx'
import Registration from './components/login/reg.jsx'


function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration/>} />
        

      </Routes>
    </Router>
    
    </>
    
    


  );
}

export default App;
