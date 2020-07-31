import React from 'react';
import './index.css';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button'
function Menu() {
  return (
      <nav className="Menu">
          <a href="/">
              <img className="Logo" src={Logo} alt="Aluraflix"/>
          </a>
          <Button className="ButtonLink" href="">
              Novo vídeo
          </Button>
      </nav>
  );
}

export default Menu;