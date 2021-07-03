import React from 'react';
import { Container } from './styles';
import logo from '../../assets/icons/logo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={logo} alt="logo moovin" />
      </div>
    </Container>
  );
};

export default Header;
