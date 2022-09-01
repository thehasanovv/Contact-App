import React from "react";
import classes from "./new-contacts.module.scss";
import FormContent from "../../components/FormContent";

const NewContacts = () => {
  return (
    <div className={classes.container}>
      <FormContent />
    </div>
  );
};

export default NewContacts;
