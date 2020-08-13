import styled, { css } from 'styled-components';

interface MessageProps {
  messageType: string;
}

export const MessageContainer = styled.div<MessageProps>`
  border: 1px solid tomato;
  border-radius: 4px;
  text-align: center;
  width: 300px;
  right: 0;
  position: fixed;
  z-index: 10;
  margin: 10px 10px;
  padding: 5px;
  background-color: #f8d7da;
  color: #721c24;
  border-color: #f5c6cb;
  padding: 0.75rem 1.25rem;
  p {
    padding-right: 30px;
  }
  button {
    position: absolute;
    border: none;
    background-color: inherit;
    color: inherit;
    cursor: pointer;
    padding: 0.75rem 1.25rem;
    top: 0;
    right: 0;
  }
  ${props =>
    props.messageType === 'success' &&
    css`
      color: #155724;
      background-color: #d4edda;
      border-color: #c3e6cb;
      button {
        position: relative;
        background-color: inherit;
        border: 1px solid #61854e;
        border-radius: 4px;
        color: inherit;
        cursor: pointer;
        padding: 0.75rem 1.25rem;
      }
    `}
`;
