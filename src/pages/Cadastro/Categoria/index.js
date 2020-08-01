import React from 'react';
import PageDefault from '../../../components/PageDefault';
import {Link} from 'react-router-dom';

const CadastroCategoria = () => {
  return (
    <PageDefault>
    <div>Cadastro de Categorias</div>
    <Link to="/">
      Voltar à Home
    </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
