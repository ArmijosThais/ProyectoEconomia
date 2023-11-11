import React, { useEffect, useState } from 'react';
import CircleCancelIcon from '../components/CircleCancelIcon';
import CircleEditIcon from '../components/CircleEditIcon';
import '../styles/CreditosAdmin.css';
import CoverNewIcon from '../components/CoverNewIcon';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { obtenerCategorias } from '../services/apiCategorias';
import { eliminarSubcategoria, obtenerSubategorias } from '../services/apiSubcategorias';

const Credito = (props) => {
  const navigate = useNavigate();
  const creditoData = props.creditoData;

  const handleEditCredito = () => {
    navigate('/creditform', { state: { creditoData } });
  };

  const handleDeleteCredito = async () => {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar esta subcategoría?');

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

  useEffect(() => {
    obtenerCategorias().then((datos) => {
      setTiposCredito(datos);
    });
  }, []);

  const handleSelectTipo = (tipo) => {
    setIdSelectedTipo(tipo._id);
    obtenerSubategorias(tipo._id).then((datos) => {
      setCreditos(datos);
    });
  };

  const handleNuevoCredito = () => {
    navigate('/creditform', { state: { idSelectedTipo } });
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
          <Button variant="outline-light">
            <CoverNewIcon width={45} height={30} fill="#000" />
          </Button>
        </>
      </div>
      <hr />
      <div className="newButton">
        {idSelectedTipo !== null && (
          <Button variant="outline-light" onClick={() => handleNuevoCredito()}>
            <CoverNewIcon width={45} height={30} fill="#000" />
          </Button>
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
              : 'No hay datos de créditos disponibles.'}
          </p>
        )}
      </div>
    </div>
  );
}
export default CreditosAdmin;
