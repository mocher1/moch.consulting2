import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePL from './components/HomePL';
import HomeEN from './components/HomeEN';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePL />} />
        <Route path="/en" element={<HomeEN />} />
      </Routes>
    </>
  );
}

export default App;