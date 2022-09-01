import React from "react";
import Contacts from "./containers/Contacts";
import NewContacts from "./containers/NewContacts";
import EditContacts from "./containers/EditContacts";
import Layout from "./components/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import "./styles/globals.scss";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/contacts" />}></Route>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contacts/new" element={<NewContacts />} />
        <Route path="/contacts/edit/:id" element={<EditContacts />} />
      </Routes>
    </Layout>
  );
};

export default App;
