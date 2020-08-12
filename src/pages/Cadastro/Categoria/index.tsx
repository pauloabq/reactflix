import React, { useState, useEffect, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField, { FormWrapper } from '../../../components/FormField';
import Message from '../../../components/Message';
import useForm from '../../../hooks/useForm';
import useMessage from '../../../hooks/useMessage';
import {
  getCategories,
  create,
} from '../../../repositories/CategoriesRepository';
import { CategoriasInterface } from '../../../types/video';

const CadastroCategoria: React.FC = () => {
  const initialValues = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { addMessage, removeMessage, messageObj } = useMessage();

  const [categorias, setCategoria] = useState<
    Array<Omit<CategoriasInterface, 'id'>>
  >([]);

  const { formValues, handleChange } = useForm({
    initialValues,
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { nome: titulo, descricao, cor } = formValues;
    const newMessages = [];
    if (titulo.length < 5) {
      newMessages.push('Informe o nome da categoria');
    }
    if (titulo.length < 5) {
      newMessages.push('Informe a descrição');
    }
    if (newMessages.length > 0) {
      addMessage({ type: 'error', message: newMessages });
      return false;
    }

    const postCategory = async () => {
      const dataPost: Omit<CategoriasInterface, 'id'> = {
        titulo,
        descricao,
        cor,
      };
      try {
        const retorno = await create(dataPost);
        if (!retorno) {
          addMessage({ type: 'error', message: ['Erro ao cadastrar!'] });
          return retorno;
        }
      } catch (error) {
        addMessage({ type: 'error', message: [`Erro: ${error.message}`] });
        return false;
      }
      return true;
    };
    const result = postCategory();
    removeMessage();
    if (result) {
      addMessage({ type: 'success', message: ['Cadastro efetuado'] });
      setCategoria([...categorias, { titulo, descricao, cor }]);
    } else {
      addMessage({ type: 'errr', message: ['Ocorreu um erro ao cadastrar'] });
    }
    return result;
  };

  useEffect(() => {
    const getData = async () => {
      const response = await getCategories();
      setCategoria(response);
    };
    getData();
  }, []);

  const hasMessage = messageObj.message.length > 0;
  const history = useHistory();
  const handleClickSuccess = () => {
    history.push('/cadastro/video');
  };

  return (
    <PageDefault>
      {hasMessage && (
        <Message
          messageObj={messageObj}
          handleClickSuccess={handleClickSuccess}
          handleClickError={removeMessage}
        />
      )}
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
