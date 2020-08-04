import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    text-align: center;
  }
  img {
    width: 600px;
  }
  @media (max-width: 800px) {
    h1 {
      font-size: 18px;
    }
    img {
      width: 300px;
    }
  }
`;
