import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreditosAdmin from './views/CreditosAdmin';
import EditAccount from './views/EditAccount';
import EditInstitution from './views/EditInstitution';
import Login from './views/Login';
import Profile from './views/Profile';
import Simulator from './views/Simulator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Simulator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/credPrueba" element={<CreditosAdmin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editAccount" element={<EditAccount />} />
        <Route path="/editInstitution" element={<EditInstitution />} />
      </Routes>
    </Router>
  );
}

export default App;
