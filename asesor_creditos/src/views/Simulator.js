import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Carousel from '../components/slickCarousel';
import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import MenuIcon from '../icons/menuIcon';
import { obtenerCategorias } from '../services/apiCategorias';
import { obtenerSubategorias } from '../services/apiSubcategorias';
import Spinner from 'react-bootstrap/Spinner';

function Simulator() {
  var nodes = [
    {
      id: '0',
      indirectChargesFee: '0',
      interest: '0.14',
      capital: '200',
      balance: '200',
    },
  ];

  const COLUMNS = [
    { label: 'N°', renderCell: (item) => item.id },
    {
      label: 'CUOTA + COBROS INDIRECTOS',
      renderCell: (item) => item.indirectChargesFee,
    },
    { label: 'INTERÉS', renderCell: (item) => item.interest },
    { label: 'CAPITAL', renderCell: (item) => item.capital },
    { label: 'SALDO', renderCell: (item) => item.balance },
  ];

  const theme = useTheme(getTheme());
  const [isLoading, setIsLoading] = useState(true);

  const [optionsType, setOptionsType] = useState([]);
  const [optionsCredit, setOptionsCredit] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedCredit, setSelectedCredit] = useState(null);

  const [amounti, setAmount] = useState('');
  const [monthsi, setMonths] = useState('');
  const [tables, setTables] = useState({
    francesa: [
      {
        id: '0',
        indirectChargesFee: '0',
        interest: '0.14',
        capital: '200',
        balance: '200',
      },
    ],
    alemana: [
      {
        id: '0',
        indirectChargesFee: '0',
        interest: '0.14',
        capital: '200',
        balance: '200',
      },
    ],
  });
  //const [nodes, setNodes] = useState({});
  const [alemana, setAlemana] = useState({
    id: '0',
    indirectChargesFee: '0',
    interest: '0.14',
    capital: '200',
    balance: '200',
  });
  const [data, setData] = useState({ nodes });
  //var data = { nodes };
  const color = '#ffdf00';
  const [hovered, setHovered] = useState(false);
  const backgroundColor = hovered ? lightenColor(color, 0.3) : color;

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  const handleSelectType = async (eventKey, event) => {
    setSelectedType(
      optionsType.find((option) => option.nombreCategoria === event.target.text)
    );
    console.log(selectedType);
    obtenerSubategorias(
      optionsType.find((option) => option.nombreCategoria === event.target.text)
        ._id
    ).then((datos) => {
      setOptionsCredit(datos);
    });
  };
  const handleSelectCredit = (eventKey, event) => {
    setSelectedCredit(event.target.text);
  };
  const handleInputChange = (event, type) => {
    const value = event.target.value;

    if (type === 'amount') {
      setAmount(value);
    } else if (type === 'months') {
      setMonths(value);
    }
  };

  useEffect(() => {
    obtenerCategorias().then((datos) => {
      setOptionsType(datos);
    });
  }, []);

  useEffect(() => {
    // Simula la carga de datos, puedes ajustar esto según tu lógica real
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [selectedType]);

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

  const generateTables = () => {
    // Convertir el monto y los meses a números
    const amount = parseFloat(amounti);
    const months = parseInt(monthsi);

    if (isNaN(amount) || isNaN(months) || amount <= 0 || months <= 0) {
      console.error('Ingrese valores válidos para monto y meses.');
      return;
    }

    // Cálculos para amortización francesa
    const rateFrancesa = 0.14; // Tasa de interés anual (ejemplo)
    const monthlyRateFrancesa = rateFrancesa / 12 / 100; // Tasa de interés mensual
    const monthlyPaymentFrancesa =
      (amount * monthlyRateFrancesa) /
      (1 - Math.pow(1 + monthlyRateFrancesa, -months));

    // Crear la tabla de amortización francesa
    const nodes = [];
    let remainingBalanceFrancesa = amount;

    for (let i = 1; i <= months; i++) {
      const interestFrancesa = remainingBalanceFrancesa * monthlyRateFrancesa;
      const principalFrancesa = monthlyPaymentFrancesa - interestFrancesa;

      nodes.push({
        id: i.toString(),
        indirectChargesFee: monthlyPaymentFrancesa.toFixed(2).toString(),
        interest: interestFrancesa.toFixed(2).toString(),
        capital: principalFrancesa.toFixed(2).toString(),
        balance: (remainingBalanceFrancesa -= principalFrancesa)
          .toFixed(2)
          .toString(),
      });
    }

    setData({ nodes });

    // Cálculos para amortización alemana
    const principalAlemana = amount / months;

    // Crear la tabla de amortización alemana
    const tablaAlemana = [];
    let remainingBalanceAlemana = amount;

    for (let i = 1; i <= months; i++) {
      const interestAlemana = remainingBalanceAlemana * monthlyRateFrancesa;
      const cuotaAlemana = principalAlemana + interestAlemana;

      tablaAlemana.push({
        id: i.toString(),
        indirectChargesFee: cuotaAlemana.toFixed(2).toString(),
        interest: interestAlemana.toFixed(2).toString(),
        capital: principalAlemana.toFixed(2).toString(),
        saldoRestante: (remainingBalanceAlemana -= principalAlemana)
          .toFixed(2)
          .toString(),
      });
    }

    // Actualizar el estado con las tablas generadas
    //setTables({ francesa: tablaFrancesa, alemana: tablaAlemana });
    //nodes.push(tablaFrancesa);
    //data = { nodes };
    //setFrancesa({tablaFrancesa});
    //setAlemana({tablaAlemana});
  };

  return (
    <div>
      <Header
        iconSide={<MenuIcon />}
        button={'Acceder'}
        destination={'/login'}
      />
      <Carousel />
      <text
        style={{
          fontWeight: 'bold',
          fontSize: '20px',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '50px',
        }}
      >
        Tablas de amortización
      </text>
      <div
        style={{
          margin: '20px 122px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ display: 'flex' }}>
            <text
              style={{
                fontSize: '18px',
                display: 'flex',
                marginRight: '30px',
              }}
            >
              Tipo de crédito:
            </text>
            <NavDropdown
              onSelect={handleSelectType}
              id="nav-dropdown-dark-example"
              title={
                selectedType && selectedType.nombreCategoria
                  ? selectedType.nombreCategoria
                  : 'Seleccione tipo crédito'
              }
              menuVariant="light"
              style={{
                fontSize: '18px',
                display: 'flex',
                color: '#666666',
              }}
            >
              {isLoading ? (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              ) : (
                optionsType.map((option, index) => (
                  <NavDropdown.Item key={index} eventKey={`option-${index}`}>
                    {option.nombreCategoria}
                  </NavDropdown.Item>
                ))
              )}
            </NavDropdown>
          </div>
          <div style={{ display: 'flex', marginTop: '25px' }}>
            <text
              style={{
                fontSize: '18px',
                display: 'flex',
                marginRight: '30px',
              }}
            >
              Crédito:
            </text>
            <NavDropdown
              onSelect={handleSelectCredit}
              id="nav-dropdown-dark-example"
              title={selectedCredit ? selectedCredit : 'Seleccione crédito'}
              menuVariant="light"
              style={{
                fontSize: '18px',
                display: 'flex',
                color: '#666666',
              }}
            >
              {isLoading ? (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              ) : (
                optionsCredit.map((option, index) => (
                  <NavDropdown.Item key={index} eventKey={`option-${index}`}>
                    {option.nombreSubcategoria}
                  </NavDropdown.Item>
                ))
              )}
            </NavDropdown>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '25px',
            }}
          >
            <text
              style={{
                fontSize: '18px',
                display: 'flex',
                marginRight: '97px',
              }}
            >
              Monto:
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
                aria-label="decimal-input"
                onChange={(event) => handleInputChange(event, 'amount')}
              />
            </InputGroup>
          </div>
        </div>
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <text
              style={{
                fontSize: '18px',
                marginRight: '53px',
                marginBottom: '20px',
              }}
            >
              Meses plazo:
            </text>
            <InputGroup style={{ width: '300px' }}>
              <Form.Control
                style={{ height: '50px' }}
                type="number"
                step="1"
                placeholder="0"
                aria-label="integer-input"
                onChange={(event) => handleInputChange(event, 'months')}
              />
              <InputGroup.Text id="basic-addon2" style={{ height: '50px' }}>
                meses
              </InputGroup.Text>
            </InputGroup>
          </div>
          <button
            to="/login"
            style={{
              height: '40px',
              width: '455px',
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
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            onClick={generateTables}
          >
            Generar
          </button>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        {tables.francesa && (
          <div
            style={{
              width: '35%',
              padding: '10px',
              margin: 'auto',
            }}
          >
            <text
              style={{
                fontWeight: 'bold',
                fontSize: '20px',
                display: 'flex',
                justifyContent: 'center',
                margin: '50px 0 20px 0',
              }}
            >
              Amortización francesa
            </text>
            <CompactTable columns={COLUMNS} data={data} theme={theme} />
          </div>
        )}

        {tables.alemana && (
          <div
            style={{
              width: '35%',
              padding: '10px',
              margin: 'auto',
            }}
          >
            <text
              style={{
                fontWeight: 'bold',
                fontSize: '20px',
                display: 'flex',
                justifyContent: 'center',
                margin: '50px 0 20px 0',
              }}
            >
              Amortización alemana
            </text>
            <CompactTable columns={COLUMNS} data={data} theme={theme} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Simulator;
