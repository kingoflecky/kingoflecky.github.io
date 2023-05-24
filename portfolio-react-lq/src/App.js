import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar.js';
import Homepage from './components/home';
import About from "./pages/navbar/about";
import Contact from "./pages/navbar/contact";
import Photography from "./pages/navbar/photography";
import Portfolio from "./pages/navbar/portfolio";


function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/photography' element={<Photography />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
      </Router>



    </div>
  );
}

export default App;
