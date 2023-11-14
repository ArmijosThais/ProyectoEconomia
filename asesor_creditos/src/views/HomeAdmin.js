import React from 'react';
import '../styles/CreditosAdmin.css';
import CreditosAdmin from './CreditosAdmin';
import Header from '../components/Header';
import Carousel from '../components/slickCarousel';
import UserIcon from '../icons/user';
import { useNavigate } from 'react-router-dom';

function HomeAdmin() {
  const navigate = useNavigate();

  const handleGoToAccountInfo = () => {
    navigate('/profile');
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
            onClick={() => handleGoToAccountInfo()}
          >
            <UserIcon />
          </button>
        }
        button={'Salir'}
        destination={'/'}
      />
      <Carousel />
      <br />
      <div>
        <CreditosAdmin />
      </div>
    </div>
  );
}

export default HomeAdmin;
