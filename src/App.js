import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './components/Pages/Home';
import Form from './Form';
import { Routes, Route, Link, Router, BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import ContactUs from './components/Pages/ContactUs';

function App() { 
    
  return (
    <div className="App">
       <div>
        <BrowserRouter>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/contactus" element={<ContactUs />} />
         </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

// ReactDOM.createRoot(document.getElementById('app')).render(<App />);

export default App;