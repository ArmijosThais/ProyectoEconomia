import React, { useState } from 'react';
import Header from '../components/Header';
import ArrowLeftLine from '../icons/arrowLeftLine';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import UpdateCancel from '../components/Update&Cancel';

function EditInstitution() {
  const institutionName = 'Banco Pichincha';
  const icon =
    'https://upload.wikimedia.org/wikipedia/commons/c/cc/Banco-Pichincha.png';

  const [color, setColor] = useState('#ffdf00'); // Valor inicial negro
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleColorChange = (event) => {
    const inputValue = event.target.value;

    // Verificar si el valor es un color hexadecimal válido
    if (/^#[0-9A-Fa-f]{6}$/.test(inputValue)) {
      setColor(inputValue);
    } else {
      // Puedes manejar la invalidación de alguna manera, como mostrar un mensaje de error
      console.log('Ingrese un color hexadecimal válido');
    }
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
            margin: '0px 30px 0px 122px',
          }}
        >
          Nombre de la institución:
        </text>
        <Form.Control
          type="text"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
          defaultValue={institutionName}
          style={{
            fontSize: '16px',
            display: 'flex',
            marginTop: '20px',
            width: '300px',
          }}
        />
      </div>
      <div style={{ display: 'flex' }}>
        <text
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            display: 'flex',
            margin: '10px 217.5px 0px 122px',
          }}
        >
          Logo:
        </text>
        <img
          src={icon}
          alt="Descripción de la imagen"
          style={{ width: '150px', height: '150px', marginTop: '10px' }}
          onClick={handleShow}
        />
      </div>
      <div style={{ display: 'flex' }}>
        <text
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            display: 'flex',
            margin: '10px 213px 0px 122px',
          }}
        >
          Color:
        </text>
        <Form.Control
          type="color"
          id="exampleColorInput"
          defaultValue={color}
          onChange={handleColorChange}
          title="Choose your color"
          style={{ marginTop: '10px' }}
        />
        <text
          style={{
            fontSize: '20px',
            display: 'flex',
            color: '#666666',
            marginLeft: '15px',
            marginTop: '10px',
          }}
        >
          {color}
        </text>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Subir logo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Url de la imagen"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            style={{
              fontSize: '16px',
              width: '465px',
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <UpdateCancel action={handleClose} cancel={handleClose} />
        </Modal.Footer>
      </Modal>
      <div style={{ margin: '50px 0px 0px 122px' }}>
        <UpdateCancel />
      </div>
    </div>
  );
}

export default EditInstitution;
