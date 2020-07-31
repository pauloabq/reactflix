import React from 'react';
import {Container} from './styles';

function Button(props) {
  return (
        <Container className={props.className} href={props.href}>
            {props.children}
        </Container>
  );
}

export default Button;