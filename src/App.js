import React from 'react';
import './App.css';
import './Home.css';
import './Navbar.css';
import'./components/Service.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Service from './components/Service';
import Skills from './components/Skills';




function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Home />
    <About />
    
    <Skills />
    <Service/>
    <Contact/>
    <Footer />
    
    </BrowserRouter>
  );
};


export default App;
