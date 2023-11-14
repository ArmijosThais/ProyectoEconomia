import React, { useEffect, useState } from 'react';
import CircleCancelIcon from '../components/CircleCancelIcon';
import CircleEditIcon from '../components/CircleEditIcon';
import '../styles/CreditosAdmin.css';
import CoverNewIcon from '../components/CoverNewIcon';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {
  obtenerCategorias,
  eliminarCategoria,
  obtenerCategoria,
  actualizarCategoria,
} from '../services/apiCategorias';
import {
  eliminarSubcategoria,
  obtenerSubategorias,
} from '../services/apiSubcategorias';
import { agregarCategoria } from '../services/apiCategorias';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import UpdateCancel from '../components/Update&Cancel';
import InputGroup from 'react-bootstrap/InputGroup';

const Credito = (props) => {
  const navigate = useNavigate();
  const creditoData = props.creditoData;

  const handleEditCredito = () => {
    navigate('/creditform', { state: { creditoData } });
  };

  const handleDeleteCredito = async () => {
    const confirmacion = window.confirm(
      '¿Estás seguro de que deseas eliminar esta subcategoría?'
    );

    if (confirmacion) {
      try {
        await eliminarSubcategoria(props.id);
        window.location.reload();
      } catch (error) {
        console.error('Error al eliminar la subcategoría:', error);
      }
    }
  };

  return (
    <div className="card">
      <h4>{props.name}</h4>
      <p className="text-muted">Tasa de Interés: {props.interes}%</p>
      <div className="acciones">
        <>
          <Button
            variant="light"
            style={{ marginLeft: '10px' }}
            onClick={() => handleDeleteCredito()}
          >
            <CircleCancelIcon width={30} height={24} fill="#000" />
          </Button>
          <Button variant="light" onClick={() => handleEditCredito()}>
            <CircleEditIcon width={30} height={24} fill="#000" />
          </Button>
        </>
      </div>
    </div>
  );
};

function CreditosAdmin() {
  const navigate = useNavigate();
  const [creditos, setCreditos] = useState([]);
  const [tiposCredito, setTiposCredito] = useState([]);
  const [idSelectedTipo, setIdSelectedTipo] = useState(null);
  const [show, setShow] = useState(false);
  const [nombreCategoria, setNombreCategoria] = useState('');
  const [requisitos, setRequisitos] = useState('');
  const [seguro, setSeguro] = useState('');
  const [donaciones, setDonaciones] = useState('');
  const [tipoCredito, setTipoCredito] = useState('');
  const [update, setUpdate] = useState('');

  useEffect(() => {
    obtenerCategorias().then((datos) => {
      setTiposCredito(datos);
    });
  }, []);

  const handleClose = () => {
    setShow(false);
    setNombreCategoria('');
    setRequisitos('');
    setSeguro('');
    setDonaciones('');
    setUpdate('');
  };
  const handleShow = () => setShow(true);
  const handleUpdateCategory = async () => {
    setUpdate('1');
    await obtenerCategoria(idSelectedTipo).then((datos) => {
      setNombreCategoria(datos.nombreCategoria);
      setRequisitos(datos.requisitos);
      setSeguro(datos.cobrosIndirectos.seguro);
      setDonaciones(datos.cobrosIndirectos.donaciones);
      console.log(datos);
    });
    setShow(true);
  };

  const handleSelectTipo = (tipo) => {
    setIdSelectedTipo(tipo._id);
    obtenerSubategorias(tipo._id).then((datos) => {
      setCreditos(datos);
    });
    setTipoCredito(tipo.nombreCategoria);
  };

  const handleNuevoCredito = () => {
    navigate('/creditform', { state: { idSelectedTipo } });
  };

  const handleUpdate = async () => {
    console.log(nombreCategoria, requisitos, seguro, donaciones);
    const data = {
      nombreCategoria: nombreCategoria,
      requisitos: requisitos,
      cobrosIndirectos: {
        seguro: seguro,
        donaciones: donaciones,
      },
    };
    try {
      if (update === '') {
        await agregarCategoria(data);
        window.location.reload();
      } else {
        actualizarCategoria(idSelectedTipo, data);
      }
    } catch (error) {
      console.error('Error al agregar la categoría:', error);
    }
    handleClose();
  };

  const handleDeleteCategoria = async () => {
    const confirmacion = window.confirm(
      '¿Estás seguro de que deseas eliminar esta categoría?'
    );

    if (confirmacion) {
      try {
        await eliminarCategoria(idSelectedTipo);
        window.location.reload();
      } catch (error) {
        console.error('Error al eliminar la subcategoría:', error);
      }
    }
  };

  const handleChangeName = (event) => {
    setNombreCategoria(event.target.value);
  };

  const handleChangeRequirements = (event) => {
    setRequisitos(event.target.value);
  };

  const handleChangeInsurance = (event) => {
    setSeguro(event.target.value);
  };

  const handleChangeDonations = (event) => {
    setDonaciones(event.target.value);
  };

  return (
    <div>
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          width: 'fit-content',
        }}
      >
        <>
          {tiposCredito.map((tipo) => {
            return (
              <Button
                key={tipo._id}
                variant="outline-secondary"
                style={{ marginLeft: '10px' }}
                onClick={() => handleSelectTipo(tipo)}
              >
                {tipo.nombreCategoria}
              </Button>
            );
          })}
          <Button variant="outline-light" onClick={handleShow}>
            <CoverNewIcon width={45} height={30} fill="#000" />
          </Button>
        </>
      </div>
      <hr />
      <div className="newButton">
        {idSelectedTipo !== null && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <text
              style={{
                fontWeight: 'bold',
                fontSize: '30px',
                marginTop: '15px',
              }}
            >
              Tipo de crédito: {tipoCredito}
            </text>
            <button
              style={{
                marginLeft: '10px',
                border: 'none',
                backgroundColor: 'white',
                marginTop: '15px',
              }}
              onClick={() => handleDeleteCategoria()}
            >
              <CircleCancelIcon width={30} height={24} fill="#000" />
            </button>
            <button
              style={{
                border: 'none',
                backgroundColor: 'white',
                marginTop: '15px',
              }}
              onClick={() => handleUpdateCategory()}
            >
              <CircleEditIcon width={30} height={24} fill="#000" />
            </button>
            <Button
              variant="outline-light"
              onClick={() => handleNuevoCredito()}
              style={{
                border: 'none',
                backgroundColor: 'white',
                marginTop: '15px',
              }}
            >
              <CoverNewIcon width={45} height={30} fill="#000" />
            </Button>
          </div>
        )}
      </div>
      <div className="cells">
        {creditos && Array.isArray(creditos) && creditos.length > 0 ? (
          creditos.map((credito) => (
            <Credito
              key={credito._id}
              id={credito._id}
              name={credito.nombreSubcategoria}
              interes={credito.tasaInteres}
              creditoData={credito}
            />
          ))
        ) : (
          <p>
            {creditos && creditos.mensaje
              ? 'No hay datos de créditos disponibles.'
              : 'Seleccione una categoría de crédito.'}
          </p>
        )}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {update === '' ? 'Nueva categoría' : 'Editar categoría'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Nombre de la categoría"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            value={nombreCategoria}
            onChange={handleChangeName}
            style={{
              fontSize: '16px',
              width: '465px',
            }}
          />
          <Form.Control
            as="textarea"
            placeholder="Requisitos"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            value={requisitos}
            onChange={handleChangeRequirements}
            style={{
              fontSize: '16px',
              width: '465px',
              height: '150px',
              marginTop: '15px',
              resize: 'none',
            }}
          />
          <text
            style={{
              fontWeight: 'bold',
              fontSize: '20px',
              display: 'flex',
              marginTop: '15px',
            }}
          >
            Cobros indirectos
          </text>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '15px',
              marginLeft: '10px',
            }}
          >
            <text
              style={{
                fontSize: '18px',
                display: 'flex',
                marginRight: '71.5px',
              }}
            >
              Seguro:
            </text>
            <InputGroup style={{ width: '300px', height: '50px' }}>
              <InputGroup.Text id="basic-addon1" style={{ height: '50px' }}>
                $
              </InputGroup.Text>
              <Form.Control
                style={{ height: '50px' }}
                type="number"
                step="0.01"
                placeholder="00.00"
                value={seguro}
                onChange={handleChangeInsurance}
                aria-label="decimal-input"
              />
            </InputGroup>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '15px',
              marginLeft: '10px',
            }}
          >
            <text
              style={{
                fontSize: '18px',
                display: 'flex',
                marginRight: '35px',
              }}
            >
              Donaciones:
            </text>
            <InputGroup style={{ width: '300px', height: '50px' }}>
              <InputGroup.Text id="basic-addon1" style={{ height: '50px' }}>
                $
              </InputGroup.Text>
              <Form.Control
                style={{ height: '50px' }}
                type="number"
                step="0.01"
                placeholder="00.00"
                value={donaciones}
                onChange={handleChangeDonations}
                aria-label="decimal-input"
              />
            </InputGroup>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <UpdateCancel action={handleUpdate} cancel={handleClose} />
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default CreditosAdmin;
