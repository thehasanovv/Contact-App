import ContactCard from "../../components/ContactCard";
import classes from "./contacts.module.scss";
import { useStateValue } from "../../context/ContactsProvider";
import { useEffect, useState } from "react";
import { useLocalStorage } from "@rehooks/local-storage";
import SkeletonCards from "../../components/Skeleton";

const Contacts = () => {
  const [{ contacts }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false);
  let contactsLS = useLocalStorage("contacts")[0];

  useEffect(() => {
    setLoading(true);
    let timer1 = setTimeout(() => {
      if (contactsLS) {
        dispatch({ type: "REPLACE_CONTACTS_STATE", payload: contactsLS });
      }
      setLoading(false);
    }, 1100);

    return () => {
      clearTimeout(timer1);
    };
  }, [contactsLS, dispatch]);

  return (
    <div className={classes.container}>
      {contacts.map((contact) => {
        return loading ? (
          <SkeletonCards />
        ) : (
          <ContactCard key={contact.id} contact={contact} />
        );
      })}
    </div>
  );
};

export default Contacts;
