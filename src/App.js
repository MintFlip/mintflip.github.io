import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import FAQs from './components/FAQs';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <About />
      <FAQs />
      <Contact />
    </div>
  );
}

export default App;