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
import UpdateCancel from '../components/Update&Cancel';
import { obtenerInstitucion } from '../services/apiInstitucion';

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

  const [color, setColor] = useState('');

  obtenerInstitucion().then((datos) => {
    console.log(datos);
    if (datos.institucion.length > 0) {
      setColor(datos.institucion[0].color);
    } else {
      console.error('No se encontraron datos de la institución.');
    }
  });
  const [hovered, setHovered] = useState(false);
  const backgroundColor = hovered ? lightenColor(color, 0.3) : color;

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  function lightenColor(color, factor) {
    const hexToRgb = (hex) =>
      hex
        .replace(/^#/, '')
        .match(/.{2}/g)
        .map((x) => parseInt(x, 16));

    const rgb = hexToRgb(color);

    const lightenedRgb = rgb.map((value) =>
      Math.round(value + (255 - value) * factor)
    );

    const lightenedHex = `#${lightenedRgb
      .map((x) => x.toString(16).padStart(2, '0'))
      .join('')}`;

    return lightenedHex;
  }

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
          <div style={{ display: 'flex' }}>
            <button
              variant="primary"
              type="submit"
              style={{
                height: '40px',
                width: '150px',
                fontSize: '16px',
                fontWeight: 'bold',
                textDecoration: 'none',
                color: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor,
                borderRadius: '15px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                border: 'none',
                marginTop: '15px',
              }}
            >
              Guardar
            </button>
            <button
              variant="danger"
              style={{
                height: '40px',
                width: '150px',
                fontSize: '16px',
                fontWeight: 'bold',
                textDecoration: 'none',
                color: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                borderRadius: '15px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                border: '1px solid black',
                marginTop: '15px',
                marginLeft: '25px',
              }}
              onClick={() => handleback()}
            >
              Cancelar
            </button>
          </div>
        </Form>
        <br />
      </div>
    </div>
  );
};

export default FormularioCredito;
