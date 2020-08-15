import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
type ExtendedButtonProps = ButtonProps & {
  responsive?: boolean;
};

const Button: React.FC<ExtendedButtonProps> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Button;
