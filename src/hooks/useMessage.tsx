import { useState, useCallback } from 'react';

interface MessageInterface {
  type: string;
  message: string[];
}

interface UseMessageInterface {
  messageObj: MessageInterface;
  addMessage: (msg: MessageInterface) => void;
  removeMessage: () => void;
}

const useMessage = (): UseMessageInterface => {
  const initialValues: MessageInterface = {
    type: '',
    message: [],
  };
  const [messageObj, setMessage] = useState<MessageInterface>(initialValues);

  const addMessage = useCallback((msg: MessageInterface): void => {
    setMessage(msg);
  }, []);

  const removeMessage = (): void => {
    setMessage(initialValues);
  };
  return {
    messageObj,
    addMessage,
    removeMessage,
  };
};

export default useMessage;
