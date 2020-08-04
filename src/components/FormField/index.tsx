import React, { ChangeEvent } from 'react';
import { Container } from './styles';

interface FormFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange?: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  type,
  name,
  ...props
}) => {
  const tagId = `id_${name}`;
  return (
    <Container>
      <label htmlFor={tagId}>
        {label}

        {type === 'textarea' ? (
          <textarea id={tagId} name={name} {...props} />
        ) : (
          <input id={tagId} type={type} name={name} {...props} />
        )}
      </label>
    </Container>
  );
};

export default FormField;
