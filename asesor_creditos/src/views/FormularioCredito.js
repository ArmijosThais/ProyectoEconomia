import React, { useState } from 'react';
import Header from '../components/Header';
import ArrowLeftLine from '../icons/arrowLeftLine';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/esm/Button';
//hola
const FormularioCredito = () => {
  const [formData, setFormData] = useState({
    requisitos: '',
    tasaDeInteres: '',
    plazos: '',
    montoMaximo: '',
    cobrosMinimos: '',
  });
  const [cobrosIndirectos, setCobrosIndirectos] = useState([
    {
      id: 1,
      name: 'Seguro',
      value: '360',
    },
    {
      id: 2,
      name: 'Caridad',
      value: '152',
    },
  ]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario
    console.log(formData);
  };

  return (
    <div>
      <Header iconSide={<ArrowLeftLine />} button={'Salir'} destination={'/'} />
      <div style={{ width: '30vw', marginLeft: 'auto', marginRight: 'auto' }}>
        <h3>Datos del Crédito</h3>
        <br />
        <Form onSubmit={handleSubmit}>
          <h5>Requisitos</h5>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              onChange={handleInputChange}
            />
          </Form.Group>
          <h5>Interés</h5>
          <InputGroup className="mb-3">
            <Form.Control aria-label="Amount (to the nearest dollar)" />
            <InputGroup.Text>%</InputGroup.Text>
          </InputGroup>
          <h5>Plazos</h5>
          <InputGroup className="mb-3">
            <Form.Control aria-label="Amount (to the nearest dollar)" />
            <InputGroup.Text>Meses</InputGroup.Text>
          </InputGroup>
          <h5>Montos</h5>
          <p>Monto Máximo</p>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control aria-label="Amount (to the nearest dollar)" />
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup>
          <p>Monto Mínimo</p>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control aria-label="Amount (to the nearest dollar)" />
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup>
          <h5>Cobros Indirectos</h5>
          <p>Seguros</p>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control aria-label="Amount (to the nearest dollar)" />
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup>
          <p>Donaciones a Fundaciones</p>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control aria-label="Amount (to the nearest dollar)" />
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup>
          <Button
            variant="primary"
            type="submit"
            style={{
              width: '10vw',
              marginTop: '20px',
              marginRight: '2vw',
              marginLeft: '4vw',
            }}
          >
            Guardar
          </Button>
          <Button
            variant="danger"
            style={{
              width: '10vw',
              marginTop: '20px',
              marginRight: '4vw',
            }}
          >
            Cancelar
          </Button>
        </Form>
        <br />
      </div>
    </div>
  );
};

export default FormularioCredito;
