import styled, { css } from 'styled-components';

interface PagedefaultProps {
  paddingAll?: number;
}
export const Container = styled.main<PagedefaultProps>`
  background-color: var(--grayDark);
  color: var(--white);
  flex: 1;
  position: relative;
  /* padding-top: 50px; */
  padding-left: 5%;
  padding-right: 5%;
  ${({ paddingAll }) =>
    css`
      padding: ${paddingAll};
    `};
`;
