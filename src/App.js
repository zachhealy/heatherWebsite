// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Summary from './components/Summary';
import ConfettiButton from './components/ConfettiButton';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Summary />
      <ConfettiButton />
    </div>
  );
}

export default App;
