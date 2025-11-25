import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePL from './components/HomePL';
import HomeEN from './components/HomeEN';
import CalculatorsPage from './components/CalculatorsPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePL />} />
        <Route path="/en" element={<HomeEN />} />
        <Route path="/kalkulatory" element={<CalculatorsPage />} />
      </Routes>
    </>
  );
}

export default App;