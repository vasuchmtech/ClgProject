import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Fencing from './pages/Fencing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fencing" element={<Fencing />} />
      </Routes>
    </Router>
  );
}

export default App;