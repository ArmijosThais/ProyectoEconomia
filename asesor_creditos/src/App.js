import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreditosAdmin from './views/CreditosAdmin';
import Login from './views/Login';
import Simulator from './views/Simulator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Simulator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/credPrueba" element={<CreditosAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
