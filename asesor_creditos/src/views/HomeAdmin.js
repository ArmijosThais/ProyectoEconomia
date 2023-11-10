import React from 'react';
import '../styles/CreditosAdmin.css';
import CreditosAdmin from './CreditosAdmin';
import Header from '../components/Header';
import Carousel from '../components/slickCarousel';
import UserIcon from '../icons/user';

function HomeAdmin() {
  return (
    <div>
      <Header
        iconSide={<UserIcon />}
        button={'Salir'}
        destination={'/'}
      />
      <Carousel />
      <br/>
      <div>
        <CreditosAdmin />
      </div>
    </div>
  );
}

export default HomeAdmin;
