import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField'

const CadastroCategoria = () => {

  const initialValues = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [categorias, setCategoria] = useState([])

  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormValues({
      ...formValues,
      [name] : value
    });

  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setCategoria([...categorias, formValues.nome])
    setFormValues(initialValues)
  }

  return (
    <PageDefault>
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
              value={formValues.cor || "#000000"}
              onChange={handleChange}
              />
          <button>
              Cadastrar
          </button>
          <ul>
          {categorias.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
          </ul>
      </form>

      <Link to="/">
        Voltar à Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
