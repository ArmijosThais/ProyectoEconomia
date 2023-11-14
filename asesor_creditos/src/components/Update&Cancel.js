import React, { useState } from 'react';
import { obtenerInstitucion } from '../services/apiInstitucion';

function UpdateCancel({ action, cancel }) {
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
    <div style={{ display: 'flex' }}>
      <button
        to="/login"
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
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onClick={action}
      >
        Actualizar
      </button>
      <button
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
        onClick={cancel}
      >
        Cancelar
      </button>
    </div>
  );
}

export default UpdateCancel;
