import ContactCard from "../../components/ContactCard";
import classes from "./contacts.module.scss";
import { useStateValue } from "../../context/ContactsProvider";
import { useEffect } from "react";
import { useLocalStorage } from "@rehooks/local-storage";
const Contacts = () => {
  const [{ contacts }, dispatch] = useStateValue();
  let contactsLS = useLocalStorage("contacts")[0];

  useEffect(() => {
    if (contactsLS) {
      dispatch({ type: "REPLACE_CONTACTS_STATE", payload: contactsLS });
    }
  }, [contactsLS, dispatch]);

  return (
    <div className={classes.container}>
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default Contacts;
