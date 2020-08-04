import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button';
import { MenuWrapper } from './styles';

const Menu: React.FC = () => {
  return (
    <MenuWrapper>
      <Link to="/">
        <img src={Logo} alt="Aluraflix" />
      </Link>
      <Link to="/cadastro/video">
        <Button>Novo vídeo</Button>
      </Link>
    </MenuWrapper>
  );
};

export default Menu;
