import FormContent from "../../components/FormContent";
import classes from "./edit-contacts.module.scss";

const EditContacts = () => {
  return (
    <div className={classes.container}>
      <div className={classes.container__wrapper}>
        <FormContent />
      </div>
    </div>
  );
};

export default EditContacts;
