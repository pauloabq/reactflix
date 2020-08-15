import React, { useState, useEffect, FormEvent } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField, { FormWrapper } from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import useMessage from '../../../hooks/useMessage';
import { getCategories } from '../../../repositories/CategoriesRepository';
import { createVideo } from '../../../repositories/VideosRepository';
import { VideosInterface, CategoriasInterface } from '../../../types/video';
import Message from '../../../components/Message';
import Button from '../../../components/Button';

const CadastroVideo: React.FC = () => {
  const initialValues = {
    categoria: '',
    titulo: '',
    description: '',
    url: '',
  };

  const [categorias, setCategorias] = useState<Array<CategoriasInterface>>([]);

  const [buttonDisable, setDisableButton] = useState(false);

  const listaCategorias = categorias.map(cat => cat.titulo);

  const history = useHistory();

  const { formValues, handleChange } = useForm({
    initialValues,
  });

  const { addMessage, removeMessage, messageObj } = useMessage();

  useEffect(() => {
    const getData = async () => {
      const response = await getCategories();
      setCategorias(response);
    };
    getData();
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDisableButton(true);
    const newMessages = [];

    const { categoria, description, titulo, url } = formValues;
    if (!titulo || String(titulo).length < 5) {
      newMessages.push('Informe o titulo');
    }
    if (!description || String(description).length < 5) {
      newMessages.push('Informe a descrição');
    }
    if (!/^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/.test(url)) {
      newMessages.push('URL inválida');
    }
    const categoriaProcurada = categorias.find(
      categoriaFind => categoriaFind.titulo === categoria,
    );
    if (!categoriaProcurada) {
      newMessages.push('Categoria inválida.');
    }
    if (newMessages.length > 0) {
      addMessage({ type: 'error', message: newMessages });
      setDisableButton(false);
      return;
    }

    if (categoriaProcurada) {
      const dataPost: VideosInterface = {
        categoriaId: categoriaProcurada.id,
        description,
        titulo,
        url,
      };
      try {
        const retorno = await createVideo(dataPost);
        if (!retorno) {
          addMessage({
            type: 'error',
            message: ['Erro ao cadastrar.'],
          });
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
    }
  };

  const hasMessage = messageObj.message.length > 0;

  const handleClickSuccess = () => {
    history.push('/');
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
        <h1>Cadastro de vídeo!</h1>
        <form onSubmit={handleSubmit} action="">
          <FormField
            label="Título do vídeo:"
            name="titulo"
            type="text"
            value={formValues.titulo}
            onChange={handleChange}
          />
          <FormField
            label="Descrição do vídeo:"
            name="description"
            type="textarea"
            value={formValues.description}
            onChange={handleChange}
          />
          <FormField
            label="URL do vídeo:"
            name="url"
            type="text"
            value={formValues.url}
            onChange={handleChange}
          />
          <FormField
            label="Categoria"
            name="categoria"
            type="text"
            value={formValues.categoria}
            onChange={handleChange}
            suggestions={listaCategorias}
          >
            <Link to="/cadastro/video/categoria">
              <FiPlusCircle
                size={24}
                title="Adicionar categoria"
                style={{ marginLeft: '5px' }}
                color="#fff"
              />
            </Link>
          </FormField>
          <Button disabled={buttonDisable} type="submit">
            Cadastrar
          </Button>
          &nbsp;
          <Button onClick={() => history.goBack()}>Voltar</Button>
        </form>
      </FormWrapper>

      {/* <Link to="/cadastro/video/categoria">Cadastrar categoria</Link> */}
    </PageDefault>
  );
};

export default CadastroVideo;
