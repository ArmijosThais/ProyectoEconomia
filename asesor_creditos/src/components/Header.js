import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '../icons/menuIcon';

function Header() {
  const icon =
    'https://upload.wikimedia.org/wikipedia/commons/c/cc/Banco-Pichincha.png';
  const institutionName = 'Banco Pichincha';
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

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '12px 50px',
      }}
    >
      <MenuIcon />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={icon}
          alt="Descripción de la imagen"
          style={{ width: '20px', marginRight: '10px' }}
        />
        <text style={{ fontWeight: 'bold', fontSize: '20px' }}>
          {institutionName}
        </text>
      </div>
      <Link
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
        }}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        Acceder
      </Link>
    </div>
  );
}

export default Header;
