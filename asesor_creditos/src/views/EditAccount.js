import React, { useEffect, useState } from 'react';
import UpdateCancel from '../components/Update&Cancel';
import Form from 'react-bootstrap/Form';
import Header from '../components/Header';
import ArrowLeftLine from '../icons/arrowLeftLine';
import { obtenerUsuario, actualizarUsuario } from '../services/apiUsuario';

function EditAccount() {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [equals, setEquals] = useState(true);
  const [length, setLength] = useState(true);
  //const asterisks = '*'.repeat(password.length);

  useEffect(() => {
    obtenerUsuario().then((datos) => {
      console.log(datos);
      if (datos.usuario.length > 0) {
        setId(datos.usuario[0]._id);
        setEmail(datos.usuario[0].correo);
      } else {
        console.error('No se encontraron datos de usuario.');
      }
    });
  }, []);

  const handleUpdate = async () => {
    setLength(true);
    setEquals(true);
    console.log(email, password, id);
    const data = {
      correo: email,
      clave: password,
    };
    if (password === passwordAgain) {
      if (password.length > 8) {
        try {
          await actualizarUsuario(id, data);
          handleReturn();
        } catch (error) {
          console.error('Error al actualizar la info:', error);
        }
      } else {
        setLength(false);
      }
    } else {
      setEquals(false);
    }
  };

  const handleReturn = () => {
    window.history.back();
    setEquals(true);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordAgain = (event) => {
    setPasswordAgain(event.target.value);
  };

  return (
    <div>
      <Header iconSide={<ArrowLeftLine />} button={'Salir'} destination={'/'} />
      <text
        style={{
          fontSize: '30px',
          fontWeight: 'bold',
          display: 'flex',
          marginTop: '50px',
          marginLeft: '122px',
          marginRight: '50px',
        }}
      >
        Información de la institución
      </text>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
        <text
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            display: 'flex',
            margin: '0px 142.5px 0px 122px',
          }}
        >
          Correo:
        </text>
        <Form.Control
          type="text"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
          defaultValue={email}
          onChange={handleEmail}
          style={{
            fontSize: '16px',
            display: 'flex',
            marginTop: '20px',
            width: '300px',
          }}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
        <text
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            display: 'flex',
            margin: '0px 100px 0px 122px',
          }}
        >
          Contraseña:
        </text>
        <Form.Control
          type="password"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
          value={password}
          onChange={handlePassword}
          style={{
            fontSize: '16px',
            display: 'flex',
            width: '300px',
          }}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
        <text
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            display: 'flex',
            margin: '0px 30px 0px 122px',
          }}
        >
          Repetir contraseña:
        </text>
        <Form.Control
          type="password"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
          value={passwordAgain}
          onChange={handlePasswordAgain}
          style={{
            fontSize: '16px',
            display: 'flex',
            width: '300px',
          }}
        />
      </div>
      {length === false && (
        <div>
          <text
            style={{
              marginLeft: '122px',
              color: 'red',
            }}
          >
            Deben tener mínimo 8 caracters
          </text>
        </div>
      )}
      {equals === false && (
        <text
          style={{
            marginLeft: '122px',
            color: 'red',
          }}
        >
          Las contraseñas no coinciden
        </text>
      )}
      <div style={{ margin: '50px 0px 0px 122px' }}>
        <UpdateCancel action={handleUpdate} cancel={handleReturn} />
      </div>
    </div>
  );
}

export default EditAccount;
