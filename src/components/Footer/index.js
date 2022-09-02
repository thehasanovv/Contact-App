import classes from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.container}>
      <p className={classes.container__text}>&copy; All rights reserved</p>
    </div>
  );
};

export default Footer;
