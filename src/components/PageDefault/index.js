import React from 'react';
import Menu from '../Menu'
import Footer from '../Footer';
import {Container} from './styles'

function PageDefault({children}) {
  return (
    <>
    <Menu />
      <Container>
        {children}
      </Container>
    <Footer/>
    </>
  );
}

export default PageDefault;