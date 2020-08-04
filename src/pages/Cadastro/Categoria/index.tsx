import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

interface FormInterface {
  nome: string;
  descricao: string;
  cor: string;
}
const CadastroCategoria: React.FC = () => {
  const initialValues = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategoria] = useState<Array<string>>([]);

  const [formValues, setFormValues] = useState<FormInterface>(initialValues);

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
    setCategoria([...categorias, formValues.nome]);
    setFormValues(initialValues);
  };

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
          value={formValues.cor || '#000000'}
          onChange={handleChange}
        />
        <button type="submit">Cadastrar</button>
        <ul>
          {categorias.map(value => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </form>

      <Link to="/">Voltar à Home</Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
