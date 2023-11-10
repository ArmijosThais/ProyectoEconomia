import React, { useState } from 'react';
import Header from '../components/Header';
import Carousel from '../components/slickCarousel';
import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import MenuIcon from '../icons/menuIcon';

function Simulator() {
  const nodes = [
    {
      id: '0',
      indirectChargesFee: '$500',
      interest: '$400',
      capital: '$300',
      balance: '$200',
    },
    {
      id: '1',
      indirectChargesFee: '$500',
      interest: '$400',
      capital: '$300',
      balance: '$200',
    },
    {
      id: '2',
      indirectChargesFee: '$500',
      interest: '$400',
      capital: '$300',
      balance: '$200',
    },
    {
      id: '3',
      indirectChargesFee: '$500',
      interest: '$400',
      capital: '$300',
      balance: '$200',
    },
    {
      id: '4',
      indirectChargesFee: '$500',
      interest: '$400',
      capital: '$300',
      balance: '$200',
    },
    {
      id: '5',
      indirectChargesFee: '$500',
      interest: '$400',
      capital: '$300',
      balance: '$200',
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

  const data = { nodes };
  const theme = useTheme(getTheme());

  const [selectedOption, setSelectedOption] = useState(null);
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const color = '#ffdf00';
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

  const handleSelect = (eventKey, event) => {
    setSelectedOption(event.target.text);
  };

  return (
    <div>
      <Header iconSide={<MenuIcon />} button={'Acceder'} />
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
              onSelect={handleSelect}
              id="nav-dropdown-dark-example"
              title={selectedOption ? selectedOption : 'Seleccione crédito'}
              menuVariant="light"
              style={{
                fontSize: '18px',
                display: 'flex',
                color: '#666666',
              }}
            >
              {options.map((option, index) => (
                <NavDropdown.Item key={index} eventKey={`option-${index}`}>
                  {option}
                </NavDropdown.Item>
              ))}
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
            <InputGroup style={{ width: '300px' }}>
              <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
              <Form.Control
                type="number"
                step="0.01"
                placeholder="00.00"
                aria-label="decimal-input"
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
              }}
            >
              Meses plazo:
            </text>
            <InputGroup style={{ width: '300px' }}>
              <Form.Control
                type="number"
                step="1"
                placeholder="0"
                aria-label="integer-input"
              />
              <InputGroup.Text id="basic-addon2">meses</InputGroup.Text>
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
          >
            Generar
          </button>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
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
      </div>
    </div>
  );
}

export default Simulator;
