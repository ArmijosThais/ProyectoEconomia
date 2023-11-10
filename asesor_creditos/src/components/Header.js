import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to="/login">Acceder</Link>
    </div>
  );
}

export default Header;
//<Link to="/cred">Creditos</Link>