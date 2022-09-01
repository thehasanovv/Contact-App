import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { reducer, initialState } from "./context/reducer";
import { ContactsProvider } from "./context/ContactsProvider";
import ModalsContextProvider from "./context/ModalsProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContactsProvider reducer={reducer} initialState={initialState}>
      <ModalsContextProvider>
        <Router>
          <App />
        </Router>
      </ModalsContextProvider>
    </ContactsProvider>
  </React.StrictMode>
);
