import React from 'react';
import PageDefault from '../../../components/PageDefault';
import {Link} from 'react-router-dom';

const CadastroVideo = () => {
  return (
    <PageDefault>
    <div>Cadastro de vídeo!</div>
    <Link to="/cadastro/video/categoria">
      Cadastrar categoria
    </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
