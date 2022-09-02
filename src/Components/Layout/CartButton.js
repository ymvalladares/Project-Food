import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/Cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const [btnIsHigh, setBtnIsHigh] = useState(false);
  const ctx = useContext(CartContext);
  const { items } = ctx;

  const numbersOfItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHigh ? classes.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHigh(true);
    const timer = setTimeout(() => {
      setBtnIsHigh(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your car</span>
      <span className={classes.badge}>{numbersOfItems}</span>
    </button>
  );
};

export default CartButton;
