import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ArrowLeftLine from '../icons/arrowLeftLine';
import EditIcon from '../icons/editIcon';

function Profile() {
  const institutionName = 'Banco Pichincha';
  const icon =
    'https://upload.wikimedia.org/wikipedia/commons/c/cc/Banco-Pichincha.png';
  const color = '#ffdf00';
  const email = 'example@example.com';
  const password = '1234567890';
  const asterisks = '*'.repeat(password.length);

  return (
    <div>
      <Header iconSide={<ArrowLeftLine />} button={'Salir'} destination={'/'} />
      <div style={{ display: 'flex', marginTop: '50px', alignItems: 'center' }}>
        <text
          style={{
            fontSize: '30px',
            fontWeight: 'bold',
            display: 'flex',
            marginLeft: '122px',
            marginRight: '50px',
          }}
        >
          Información de la institución
        </text>
        <Link
          to={'/editInstitution'}
          style={{
            height: '40px',
            width: '40px',
            borderRadius: '100%',
            border: '1px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <EditIcon />
        </Link>
      </div>
      <div style={{ display: 'flex' }}>
        <text
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            display: 'flex',
            margin: '20px 30px 0px 122px',
          }}
        >
          Nombre de la institución:
        </text>
        <text
          style={{
            fontSize: '20px',
            display: 'flex',
            marginTop: '20px',
            color: '#666666',
          }}
        >
          {institutionName}
        </text>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <text
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            display: 'flex',
            margin: '0px 217.5px 0px 122px',
          }}
        >
          Logo:
        </text>
        <img
          src={icon}
          alt="Descripción de la imagen"
          style={{ width: '20px', height: '20px' }}
        />
      </div>
      <div style={{ display: 'flex' }}>
        <text
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            display: 'flex',
            margin: '0px 213px 0px 122px',
          }}
        >
          Color:
        </text>
        <text
          style={{
            fontSize: '20px',
            display: 'flex',
            color: '#666666',
          }}
        >
          {color}
        </text>
      </div>
      <div style={{ display: 'flex', marginTop: '50px', alignItems: 'center' }}>
        <text
          style={{
            fontSize: '30px',
            fontWeight: 'bold',
            display: 'flex',
            marginLeft: '122px',
            marginRight: '105px',
          }}
        >
          Información de la cuenta
        </text>
        <Link
          to={'/editAccount'}
          style={{
            height: '40px',
            width: '40px',
            borderRadius: '100%',
            border: '1px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <EditIcon />
        </Link>
      </div>
      <div style={{ display: 'flex' }}>
        <text
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            display: 'flex',
            margin: '20px 200px 0px 122px',
          }}
        >
          Correo:
        </text>
        <text
          style={{
            fontSize: '20px',
            display: 'flex',
            marginTop: '20px',
            color: '#666666',
          }}
        >
          {email}
        </text>
      </div>
      <div style={{ display: 'flex' }}>
        <text
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            display: 'flex',
            margin: '0px 158px 0px 122px',
          }}
        >
          Contraseña:
        </text>
        <text
          style={{
            fontSize: '20px',
            display: 'flex',
            marginTop: '20px',
            color: '#666666',
          }}
        >
          {asterisks}
        </text>
      </div>
    </div>
  );
}

export default Profile;
