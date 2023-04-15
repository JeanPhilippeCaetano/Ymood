import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Extranet from './Extranet';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/extranet" element={<Extranet />} />
    </Routes>
  );
}

export default App;