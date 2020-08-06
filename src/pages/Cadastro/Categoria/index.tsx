import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

interface FormInterface {
  nome: string;
  descricao: string;
  cor: string;
}

interface CategoryInterface {
  id?: number;
  nome: string;
  descricao: string;
  cor: string;
}

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  textarea {
    min-height: 150px;
  }
  form {
    text-align: center;
  }
`;

const CadastroCategoria: React.FC = () => {
  const initialValues = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategoria] = useState<Array<CategoryInterface>>([]);

  const [formValues, setFormValues] = useState<FormInterface>(initialValues);
  const isProduction = process.env.NODE_ENV === 'production';

  const BASE_URL = isProduction
    ? 'https://reactflix-backend.herokuapp.com/categorias'
    : 'http://localhost:3001/categorias';

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(BASE_URL);
      const responseData = await response.json();
      setCategoria([...responseData]);
    };
    getData();
  }, [BASE_URL]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCategoria([...categorias, formValues]);
    setFormValues(initialValues);
  };

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
            <li key={value.nome}>{value.nome}</li>
          ))}
        </ul>

        <Link to="/">Voltar à Home</Link>
      </FormWrapper>
    </PageDefault>
  );
};

export default CadastroCategoria;
