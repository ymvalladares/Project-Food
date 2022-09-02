import React, { useContext } from "react";
import CartContext from "../../store/Cart-context";
import MealForm from "./MealForm";
import classes from "./MealIteam.module.css";

const MealIteam = (props) => {
  const ctx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3 className={classes.description}>{props.name}</h3>
        <div>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealIteam;
