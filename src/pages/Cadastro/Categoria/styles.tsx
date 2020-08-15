import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  textarea {
    min-height: 150px;
  }
  form {
    text-align: center;
  }
`;

export const Categorias = styled.div`
  text-align: center;
  width: 600px;
  max-width: 100%;
  margin-top: 50px;

  ul {
    /* border-top: 1px solid var(--primary); */
    list-style: none;
    margin: 0;
    padding-left: 0;
    width: 100%;
    text-align: center;
  }
  li {
    /* font-style: normal; */
    font-weight: 300;
    line-height: 2;
    /* border-bottom: 1px solid #e1e1e1; */
  }
`;
