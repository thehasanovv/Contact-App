import emtyp from "../../assets/images/empty-card.svg";
import classes from "./emtyp-card.module.scss";

const EmptyCard = () => {
  return (
    <div className={classes.container}>
      <img src={emtyp} alt="empty" />
      <p>No Contacts Avaible</p>
    </div>
  );
};

export default EmptyCard;
