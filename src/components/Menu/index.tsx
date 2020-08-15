import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button';
import { MenuWrapper } from './styles';

const Menu: React.FC = () => {
  const { pathname } = useLocation();
  const path = '/cadastro/video';
  const isVideo = pathname === path;

  const buttonElements = {
    location: isVideo ? `${path}/categoria` : path,
    text: isVideo ? `Nova Categoria` : 'Novo Vídeo',
  };

  return (
    <MenuWrapper>
      <Link to="/">
        <img src={Logo} alt="Aluraflix" />
      </Link>
      <Link to={buttonElements.location}>
        <Button responsive>{buttonElements.text}</Button>
      </Link>
    </MenuWrapper>
  );
};

export default Menu;
