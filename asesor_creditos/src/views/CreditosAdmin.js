import React, { useState } from 'react';
import CircleCancelIcon from '../components/CircleCancelIcon';
import CircleEditIcon from '../components/CircleEditIcon';
import '../styles/CreditosAdmin.css';
import CoverNewIcon from '../components/CoverNewIcon';

const Credito = (props) => {
  return (
    <div className="card">
      <h4>{props.name}</h4>
      <p className="text-muted">Tasa de Interés: {props.interes}%</p>
      <div className="acciones">
        <CircleCancelIcon width={30} height={24} fill="#000" />
        <CircleEditIcon width={30} height={24} fill="#000" />
      </div>
    </div>
  );
};

function CreditosAdmin() {
  const [creditos, setCreditos] = useState([
    {
      id: 1,
      name: 'Crédito Multipropósito',
      interes: '15',
    },
    {
      id: 2,
      name: 'Crédito línea abierta',
      interes: '10',
    },
    {
      id: 3,
      name: 'Crédito Económico',
      interes: '12',
    },
    {
      id: 4,
      name: 'Crédito Económico',
      interes: '12',
    },
    {
      id: 5,
      name: 'Crédito Económico',
      interes: '12',
    },
    {
      id: 6,
      name: 'Crédito Económico',
      interes: '12',
    },
  ]);

  const [tiposCredito, setTiposCredito] = useState([
    {
      id: 1,
      name: 'Todos',
    },
    {
      id: 2,
      name: 'Hipotecarios',
    },
    {
      id: 3,
      name: 'Consumo',
    },
    {
      id: 3,
      name: 'Servicio',
    },
    {
      id: 3,
      name: 'Educación',
    },
  ]);

  const handleSelectTipo = () => {
    // Realiza alguna acción cuando se hace clic en el componente
    // Puedes definir lo que desees que suceda aquí
    //console.log(`Se hizo clic en ${props.name}`);
  };

  return (
    <div>
      <div className="row">
        {tiposCredito.map((tipo) => {
          return (
            <div className="snack" onClick={handleSelectTipo}>
              <h4>{tipo.name}</h4>
            </div>
          );
        })}
        <CoverNewIcon width={45} height={30} fill="#000" />
      </div>
      <hr />
      <div className='newButton'>
        <CoverNewIcon width={45} height={30} fill="#000" />
      </div>
      <div className="cells">
        {creditos.map((credito) => {
          return (
            <Credito
              key={credito.id}
              name={credito.name}
              interes={credito.interes}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CreditosAdmin;
