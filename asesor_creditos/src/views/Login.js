import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import Header from '../components/Header';
import MenuIcon from '../icons/menuIcon';
import { iniciarSesion } from '../services/apiUsuario';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      iniciarSesion({ correo, clave }).then((resultado) => {
        if (resultado && resultado.encontrado) {
          navigate('/homeadmin');
        } else {
          toast.error('Usuario o contraseña incorrectos', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      });
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
    }
  };

  return (
    <div>
      <Header iconSide={<MenuIcon />} button={'Salir'} destination={'/'} />
      <div
        className="backgraund-container"
        style={{
          background: '#e4e4e4',
          height: '91vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          className="login-container"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh',
            width: '60vw',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: 'white',
            borderRadius: '25px',
          }}
        >
          <div
            className="logo-section"
            style={{
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '40vw',
              margin: '5%',
            }}
          >
            <div className="logo"></div>
            <div className="imagen">
              <img
                src="https://voipberry.com/wp-content/uploads/2021/09/banner001a01comp-768x707.png"
                alt="Descripción de la imagen"
                style={{ width: '400px' }}
              />
            </div>
          </div>
          <div
            className="form-section"
            style={{
              flex: '2',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h2 style={{ margin: '0', textAlign: 'left' }}>¡Bienvenido!</h2>
            <h2 style={{ margin: '0', textAlign: 'left' }}>
              Ingresa a tu cuenta
            </h2>
            <div className="formulario">
              <Form
                className="formLogin"
                onSubmit={handleSubmit}
                style={{
                  width: '20vw',
                  paddingTop: '20px',
                  justifyItems: 'center',
                }}
              >
                <FloatingLabel
                  controlId="floatingInput"
                  label="Correo Electrónico"
                  className="mb-3"
                >
                  <Form.Control
                    type="correo"
                    placeholder="name@example.com"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Contraseña">
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    value={clave}
                    onChange={(e) => setClave(e.target.value)}
                  />
                </FloatingLabel>
                <Button
                  variant="primary"
                  type="submit"
                  style={{
                    width: '10vw',
                    marginTop: '20px',
                    marginLeft: '5vw',
                  }}
                >
                  Ingresar
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
