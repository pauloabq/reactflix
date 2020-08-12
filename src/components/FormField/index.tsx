import React, { ChangeEvent } from 'react';
import {
  FormFieldContainer,
  Label,
  LabelText,
  Textarea,
  Input,
  FormContainer,
} from './styles';

interface FormFieldProps {
  label: string;
  type: string;
  name: string;
  value: any;
  suggestions?: string[];
  onChange?: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  type,
  name,
  suggestions,
  ...props
}) => {
  const tagId = `id_${name}`;
  const isTextArea = type === 'textarea';
  return (
    <FormFieldContainer>
      <Label htmlFor={tagId}>
        {isTextArea ? (
          <Textarea id={tagId} name={name} {...props} />
        ) : (
          <Input
            id={tagId}
            type={type}
            name={name}
            list={`options_${tagId}`}
            {...props}
          />
        )}
        <LabelText>{label}</LabelText>
        {suggestions && (
          <datalist id={`options_${tagId}`}>
            {suggestions.map(suggestion => (
              <option key={suggestion} value={suggestion}>
                {suggestion}
              </option>
            ))}
          </datalist>
        )}
      </Label>
    </FormFieldContainer>
  );
};

export const FormWrapper: React.FC = ({ children, ...props }) => {
  return <FormContainer {...props}>{children}</FormContainer>;
};
export default FormField;
