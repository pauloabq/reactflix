import React from 'react';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button';
import {MenuWrapper} from './styles';
import {Link} from 'react-router-dom';

function Menu() {
  return (
    <MenuWrapper>
      <Link to="/">
        <img src={Logo} alt="Aluraflix" />
      </Link>
      <Button as={Link} to="/cadastro/video">
        Novo vídeo
      </Button>
    </MenuWrapper>
  );
}

export default Menu;
