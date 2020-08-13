import styled from 'styled-components';

export const MenuWrapper = styled.nav`
  width: 100%;
  height: var(--bodyPaddingTop);
  background: var(--black);
  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 100;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;

  border-bottom: 2px solid var(--primary);
  a {
    img {
      max-width: 168px;
    }
  }
  @media (max-width: 800px) {
    height: var(--bodyPaddingTop);
    justify-content: center;
    a {
      img {
        max-width: 105px;
      }
    }
  }
`;
