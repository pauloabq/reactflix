import React from 'react';
import {Container} from './styles'

const FormField = ({label, type, ...props})=>{
  // const tagModifyer =  ;
  return (
    <Container>
      <label>

        {label}

        {type === "textarea" ?
              <textarea {...props} /> :
              <input type={type} {...props} />}
      </label>
    </Container>
  )
}

export default FormField;
