import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FormWrapper } from './styles';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';

interface CategoryInterface {
  id?: number;
  titulo: string;
  cor: string;
}

const CadastroCategoria: React.FC = () => {
  const initialValues = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategoria] = useState<Array<CategoryInterface>>([]);

  const { formValues, handleChange, handleSubmit } = useForm({
    initialValues,
    onSubmit: () => {
      const { nome: titulo, cor } = formValues;
      setCategoria([...categorias, { titulo, cor }]);
    },
  });

  const isProduction = process.env.NODE_ENV === 'production';

  const BASE_URL = isProduction
    ? 'https://reactflix-backend.herokuapp.com/categorias'
    : 'http://localhost:3001/categorias';

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(BASE_URL);
      const responseData = await response.json();
      const returnData = responseData.map(
        ({ titulo, cor }: CategoryInterface) => ({ titulo, cor }),
      );
      setCategoria(returnData);
    };
    getData();
  }, [BASE_URL]);

  return (
    <PageDefault>
      <FormWrapper>
        <h1>Cadastro de Categorias</h1>
        <form onSubmit={handleSubmit} action="">
          <FormField
            label="Nome da categoria:"
            name="nome"
            type="text"
            value={formValues.nome}
            onChange={handleChange}
          />
          <FormField
            label="Descrição"
            name="descricao"
            type="textarea"
            value={formValues.descricao}
            onChange={handleChange}
          />
          <FormField
            label="Cor"
            name="cor"
            type="color"
            value={formValues.cor || '#000000'}
            onChange={handleChange}
          />
          <button type="submit">Cadastrar</button>
        </form>

        {categorias.length === 0 && <div>Loading...</div>}

        <ul>
          {categorias.map(value => (
            <li key={value.titulo}>{value.titulo}</li>
          ))}
        </ul>

        <Link to="/">Voltar à Home</Link>
      </FormWrapper>
    </PageDefault>
  );
};

export default CadastroCategoria;
