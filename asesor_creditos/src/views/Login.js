import React, { useState } from 'react';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica de autenticación
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="backgraund-container" style={styles.backcontainer}>
      <div className="login-container">
        <div className="logo-section">
          <div className="logo"></div>
          <div className="imagen">
            <img
              src={
                'https://voipberry.com/wp-content/uploads/2021/09/banner001a01comp-768x707.png'
              }
              alt="Descripción de la imagen"
              style={styles.image}
            />
          </div>
        </div>
        <div className="form-section">
          <h2>¡Bienvenido!</h2>
          <h2>Ingresa a tu cuenta</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

const styles = {
  image: {
    width: '100%',
  },
  backcontainer: {
    background: 'rgb(0, 123, 255, 0.2)',
    height: '95vh',
    display: 'flex',
    justifyContent: 'center' /* Centra horizontalmente */,
    alignItems: 'center' /* Centra verticalmente */,
  },
};
