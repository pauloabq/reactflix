import React, { useState, useEffect, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField, { FormWrapper } from '../../../components/FormField';
import Message from '../../../components/Message';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import useMessage from '../../../hooks/useMessage';
import {
  getCategories,
  create,
} from '../../../repositories/CategoriesRepository';
import { CategoriasInterface } from '../../../types/video';
import { Categorias } from './styles';

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

  const [buttonDisable, setDisableButton] = useState(false);

  const { formValues, handleChange } = useForm({
    initialValues,
  });

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    setDisableButton(true);

    const { nome: titulo, descricao, cor } = formValues;
    const newMessages = [];
    if (titulo.length < 5) {
      newMessages.push('Informe o nome da categoria');
    }
    if (titulo.length < 5) {
      newMessages.push('Informe a descrição');
    }
    if (categorias.find(nome => nome.titulo === titulo)) {
      newMessages.push('Categoria já existente.');
    }
    if (newMessages.length > 0) {
      addMessage({ type: 'error', message: newMessages });
      setDisableButton(false);
      return;
    }

    const dataPost: Omit<CategoriasInterface, 'id'> = {
      titulo,
      descricao,
      cor,
    };
    try {
      const retorno = await create(dataPost);
      if (!retorno) {
        addMessage({ type: 'error', message: ['Erro ao cadastrar!'] });
        setDisableButton(false);
      } else {
        addMessage({ type: 'success', message: ['Cadastro efetuado'] });
      }
    } catch (error) {
      addMessage({
        type: 'error',
        message: ['Ocorreu um erro no envio das informações'],
      });
      setDisableButton(false);
    }
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
          <Button disabled={buttonDisable} type="submit">
            Cadastrar
          </Button>
          &nbsp;
          <Button onClick={() => history.goBack()}>Voltar</Button>
        </form>

        {categorias.length === 0 && <div>Loading...</div>}
        {categorias.length > 0 && (
          <Categorias>
            <h3>Categorias Cadastradas:</h3>
            <ul>
              {categorias.map(value => (
                <li key={value.titulo}>{value.titulo}</li>
              ))}
            </ul>
          </Categorias>
        )}
      </FormWrapper>
    </PageDefault>
  );
};

export default CadastroCategoria;
