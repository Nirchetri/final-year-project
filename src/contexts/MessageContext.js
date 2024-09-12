// src/contexts/MessageContext.js
import React, { createContext, useContext } from 'react';

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const messages = {
    tagline: "Connecting Ideas, Empowering Innovation",
    valueProposition: "Your gateway to seamless links and streamlined connections."
  };

  return (
    <MessageContext.Provider value={messages}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessages = () => useContext(MessageContext);
