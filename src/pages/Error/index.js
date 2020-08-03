import React from 'react';

import Error404 from '../../assets/img/404-.jpg'
import { Container } from './styles';
import PageDefault from '../../components/PageDefault';

function Error() {
  return (
    <PageDefault>
      <Container>
          <h1>Erro 404 - Não encontrado</h1>
          <img src={Error404} alt="Erro de imagem"/>
      </Container>
    </PageDefault>
  );
}

export default Error;
