import React from 'react';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button';
import {MenuWrapper} from './styles'

function Menu() {
  return (
    <MenuWrapper>
      <a href="/">
        <img src={Logo} alt="Aluraflix" />
      </a>
      <Button href="">
        Novo vídeo
      </Button>
    </MenuWrapper>
  );
}

export default Menu;
