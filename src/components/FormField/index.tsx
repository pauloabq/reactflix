import React, { ChangeEvent } from 'react';
import {
  FormFieldContainer,
  Label,
  LabelText,
  Textarea,
  Input,
} from './styles';

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
  const isTextArea = type === 'textarea';
  return (
    <FormFieldContainer>
      <Label htmlFor={tagId}>
        {isTextArea ? (
          <Textarea id={tagId} type={type} name={name} {...props} />
        ) : (
          <Input id={tagId} type={type} name={name} {...props} />
        )}
        <LabelText>{label}</LabelText>
      </Label>
    </FormFieldContainer>
  );
};

export default FormField;
