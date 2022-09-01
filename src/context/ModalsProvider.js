import React, { useState, createContext } from "react";
import ContactModal from "../containers/Contacts/ContactModal";

export const ModalsContext = createContext();

const ModalsContextProvider = ({ children }) => {
  const [openContactModal, setOpenContactModal] = useState(false);
  const [openContactModalID, setOpenContactModalID] = useState("");

  const value = {
    openContactModal,
    setOpenContactModal,
    setOpenContactModalID,
    openContactModalID,
  };
  return (
    <ModalsContext.Provider value={value}>
      <ContactModal />
      {children}
    </ModalsContext.Provider>
  );
};

export default ModalsContextProvider;
