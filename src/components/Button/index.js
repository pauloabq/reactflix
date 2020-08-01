import React from 'react';
import {Container} from './styles';

function Button({children, ...props}) {
  return (
        <Container {...props}>
            {children}
        </Container>
  );
}

export default Button;
