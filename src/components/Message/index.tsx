import React from 'react';
import { MessageContainer } from './styles';

interface MessageInterface {
  messageObj: {
    type: string;
    message: string[];
  };
  handleClickError(): void;
  handleClickSuccess?: () => void;
}
const Message: React.FC<MessageInterface> = ({
  messageObj,
  handleClickSuccess,
  handleClickError,
}) => {
  return (
    <MessageContainer messageType={messageObj.type}>
      {messageObj.message.map(mensagem => {
        return <p key={mensagem}>{mensagem}</p>;
      })}
      {messageObj.type === 'error' && (
        <button type="button" onClick={handleClickError}>
          X
        </button>
      )}
      {messageObj.type === 'success' && (
        <button type="button" onClick={handleClickSuccess}>
          OK
        </button>
      )}
    </MessageContainer>
  );
};

export default Message;
