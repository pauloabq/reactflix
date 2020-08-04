import React from 'react';
import { Container } from './styles';

const Button: React.FC = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Button;
