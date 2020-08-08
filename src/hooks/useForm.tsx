import { useState, ChangeEvent, FormEvent } from 'react';

interface FormInterface {
  nome: string;
  descricao: string;
  cor: string;
}

interface UseFormInterface {
  formValues: FormInterface;
  handleChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

interface UseFormParams {
  initialValues: FormInterface;
  onSubmit(): void;
}
const useForm = ({
  initialValues,
  onSubmit,
}: UseFormParams): UseFormInterface => {
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
    onSubmit();
    // const { nome: titulo, cor } = formValues;
    // setCategoria([...categorias, { titulo, cor }]);
    setFormValues(initialValues);
  };

  return {
    formValues,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
