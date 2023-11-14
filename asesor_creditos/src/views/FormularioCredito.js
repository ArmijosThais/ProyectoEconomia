import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ArrowLeftLine from '../icons/arrowLeftLine';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/esm/Button';
import {
  actualizarSubcategoria,
  agregarSubcategoria,
} from '../services/apiSubcategorias';

const FormularioCredito = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const idSelectedTipo = location.state.idSelectedTipo;
  const creditoData = location.state.creditoData;

  const [formData, setFormData] = useState({
    nombreSubcategoria: creditoData ? creditoData.nombreSubcategoria : '',
    tasaInteres: creditoData ? creditoData.tasaInteres : '',
    plazoMaximo: creditoData ? creditoData.plazoMaximo : '',
    montoMinimo: creditoData ? creditoData.montoMinimo : '',
    montoMaximo: creditoData ? creditoData.montoMaximo : '',
    idCategoria: creditoData ? creditoData.idCategoria : idSelectedTipo,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (creditoData) {
      actualizarSubcategoria(creditoData._id, formData).then((response) => {
        console.log(response);
        if (response) {
          navigate('/homeadmin');
        }
      });
    } else {
      agregarSubcategoria(formData).then((response) => {
        console.log(response);
        if (response) {
          navigate('/homeadmin');
        }
      });
    }
  };

  const handleback = () => {
    navigate('/homeadmin');
  };

  return (
    <div>
      <Header
        iconSide={
          <button
            style={{
              border: 'none',
              backgroundColor: 'white',
            }}
            onClick={() => handleback()}
          >
            <ArrowLeftLine />
          </button>
        }
        button={'Salir'}
        destination={'/'}
      />
      <div style={{ width: '30vw', marginLeft: 'auto', marginRight: 'auto' }}>
        <h3>Datos del Crédito</h3>
        <br />
        <Form onSubmit={handleSubmit}>
          <h5>Nombre</h5>
          <InputGroup className="mb-3">
            <Form.Control
              aria-label="Last name"
              name="nombreSubcategoria"
              value={formData.nombreSubcategoria}
              onChange={handleInputChange}
              required
            />
          </InputGroup>
          <h5>Interés</h5>
          <InputGroup className="mb-3">
            <Form.Control
              aria-label="Amount (to the nearest dollar)"
              name="tasaInteres"
              value={formData.tasaInteres}
              onChange={handleInputChange}
              required
            />
            <InputGroup.Text>%</InputGroup.Text>
          </InputGroup>
          <h5>Plazos</h5>
          <InputGroup className="mb-3">
            <Form.Control
              aria-label="Amount (to the nearest dollar)"
              name="plazoMaximo"
              value={formData.plazoMaximo}
              onChange={handleInputChange}
              required
            />
            <InputGroup.Text>Meses</InputGroup.Text>
          </InputGroup>
          <h5>Montos</h5>
          <p>Monto Máximo</p>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              aria-label="Amount (to the nearest dollar)"
              name="montoMaximo"
              value={formData.montoMaximo}
              onChange={handleInputChange}
              required
            />
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup>
          <p>Monto Mínimo</p>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              aria-label="Amount (to the nearest dollar)"
              name="montoMinimo"
              value={formData.montoMinimo}
              onChange={handleInputChange}
              required
            />
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
            onClick={() => handleback()}
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
