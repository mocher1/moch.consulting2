import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePL from './components/HomePL';
import DecisionCostCalculator from './components/DecisionCostCalculator';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePL />} />
        <Route path="/kalkulator-kosztu-decyzji" element={<DecisionCostCalculator />} />
      </Routes>
    </>
  );
}

export default App;