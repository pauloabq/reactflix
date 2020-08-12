import { useState, ChangeEvent } from 'react';

interface UseFormInterface {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formValues: { [key: string]: any };
  handleChange: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => void;
}

interface UseFormParams {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialValues: { [key: string]: any };
}
const useForm = ({ initialValues }: UseFormParams): UseFormInterface => {
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return {
    formValues,
    handleChange,
  };
};

export default useForm;
