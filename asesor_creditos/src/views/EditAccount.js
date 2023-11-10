import React, { useState } from 'react';
import UpdateCancel from '../components/Update&Cancel';
import Form from 'react-bootstrap/Form';
import Header from '../components/Header';
import ArrowLeftLine from '../icons/arrowLeftLine';

function EditAccount() {
  const email = 'example@example.com';
  const password = '1234567890';
  const asterisks = '*'.repeat(password.length);

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
          style={{
            fontSize: '16px',
            display: 'flex',
            marginTop: '20px',
            width: '300px',
          }}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
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
          defaultValue={asterisks}
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
          style={{
            fontSize: '16px',
            display: 'flex',
            width: '300px',
          }}
        />
      </div>
      <div style={{ margin: '50px 0px 0px 122px' }}>
        <UpdateCancel />
      </div>
    </div>
  );
}

export default EditAccount;
