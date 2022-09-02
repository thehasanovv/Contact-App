import ContactCard from "../../components/ContactCard";
import classes from "./contacts.module.scss";
import { useStateValue } from "../../context/ContactsProvider";
import { useEffect, useState } from "react";
import { useLocalStorage } from "@rehooks/local-storage";
import SkeletonCards from "../../components/Skeleton";
import EmptyCard from "../../components/Empty/EmptyCard";

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
      {contacts.length === 0 ? (
        <div className={classes.container__emty}>
          <EmptyCard />
        </div>
      ) : (
        <div className={classes.container__wrapper}>
          {contacts.map((contact) =>
            loading ? (
              <SkeletonCards key={contact.id} />
            ) : (
              <ContactCard key={contact.id} contact={contact} />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Contacts;
