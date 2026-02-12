import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePL from './components/HomePL';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePL />} />
      </Routes>
    </>
  );
}

export default App;