import React, { Fragment } from "react";
import classes from "./Header.module.css";
import image from "../../assets/meals.jpg";
import CartButton from "./CartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Reals meals</h1>
        <CartButton onClick={props.onShowCart}>Cart</CartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={image} alt="A full table of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
