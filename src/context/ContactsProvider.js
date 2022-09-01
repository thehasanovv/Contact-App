import { createContext, useContext, useReducer } from "react";

export const ContactsContext = createContext();

export const ContactsProvider = ({ reducer, initialState, children }) => (
  <ContactsContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </ContactsContext.Provider>
);

export const useStateValue = () => useContext(ContactsContext);
