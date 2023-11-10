import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './views/Login.js';
import CreditosAdmin from './views/CreditosAdmin.js';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/credPrueba" element={<CreditosAdmin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
