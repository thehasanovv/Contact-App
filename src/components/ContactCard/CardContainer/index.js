import React from "react";
import classes from "./card-container.module.scss";
import CardDropdown from "../CardDropdown";

const CardContainer = ({ contact }) => {
  const { id, image, name, surname, fatherName, faculty } = contact;

  return (
    <div className={classes.container}>
      <div className={classes.container__left}>
        <img
          className={classes.container__left__img}
          src={
            typeof image === "object"
              ? URL.createObjectURL(image)
              : image
              ? image
              : "./user.png"
          }
          alt="User"
        />
        <div className={classes.container__left__user}>
          <div className={classes.container__left__user_info}>
            <span>Name:</span> {name}
          </div>
          <div className={classes.container__left__user_info}>
            <span>Surname:</span> {surname}
          </div>
          <div className={classes.container__left__user_info}>
            <span>Father Name:</span> {fatherName}
          </div>
          <div className={classes.container__left__user_info}>
            <span>Faculty:</span> {faculty}
          </div>
        </div>
      </div>
      <div className={classes.container__right}>
        <CardDropdown id={id} />
      </div>
    </div>
  );
};

export default CardContainer;
