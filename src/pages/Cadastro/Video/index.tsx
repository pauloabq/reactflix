import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

const CadastroVideo: React.FC = () => {
  return (
    <PageDefault>
      <div>Cadastro de vídeo!</div>
      <Link to="/cadastro/video/categoria">Cadastrar categoria</Link>
    </PageDefault>
  );
};

export default CadastroVideo;
