import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar should be outside the Routes component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
