import React from 'react';
import ReadctDOM from 'react-dom';
import './App.css'; 
import { Navbar } from './components/navbar.js';
import { Homepage } from './components/home';

function App() {
  return (
    <div className="App">
    
       <Navbar />    
       <Homepage />
       
    </div>
  );
}

export default App;
