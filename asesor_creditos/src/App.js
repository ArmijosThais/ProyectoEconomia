import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreditosAdmin from './views/CreditosAdmin';
import Login from './views/Login';
import Simulator from './views/Simulator';
import HomeAdmin from './views/HomeAdmin';
import FormularioCredito from './views/FormularioCredito';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Simulator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/credPrueba" element={<CreditosAdmin />} />
        <Route path="/homeadmin" element={<HomeAdmin />} />
        <Route path="/creditform" element={<FormularioCredito />} />
      </Routes>
    </Router>
  );
}

export default App;
