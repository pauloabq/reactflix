import styled, { css } from 'styled-components';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
type ExtendedButtonProps = ButtonProps & {
  responsive?: boolean;
};

export const Container = styled.button<ExtendedButtonProps>`
  background-color: Transparent;
  min-width: 135px;
  max-width: 100%;
  color: var(--white);
  border: 1px solid var(--white);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.3s;

  &:hover,
  &:focus,
  &:disabled {
    opacity: 0.5;
  }
  ${({ responsive }) => {
    return (
      responsive &&
      css`
      @media (max-width: 800px) {
        min-width: 100%;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--primary);
        border-radius: 0;
        border: 0;
        text-align: center;
      `
    );
  }}
`;
