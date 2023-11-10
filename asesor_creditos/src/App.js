import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreditosAdmin from './views/CreditosAdmin';
import EditAccount from './views/EditAccount';
import EditInstitution from './views/EditInstitution';
import Login from './views/Login';
import Profile from './views/Profile';
import Simulator from './views/Simulator';
import HomeAdmin from './views/HomeAdmin';
import FormularioCredito from './views/FormularioCredito';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Simulator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homeadmin" element={<HomeAdmin />} />
        <Route path="/creditform" element={<FormularioCredito />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editAccount" element={<EditAccount />} />
        <Route path="/editInstitution" element={<EditInstitution />} />
      </Routes>
    </Router>
  );
}

export default App;
