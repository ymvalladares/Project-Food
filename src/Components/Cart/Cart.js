import React, { useContext } from "react";
import CartContext from "../../store/Cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const hasItems = ctx.items.length > 0;

  const cartItemAddHandler = (items) => {
    ctx.addItem(items);
  };
  const cartItemRemoveHanlder = (id) => {
    ctx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((items) => (
        <CartItem
          onClick={() => {
            console.log(items);
          }}
          key={items.id}
          name={items.name}
          amount={items.amount}
          price={items.price}
          onRemove={cartItemRemoveHanlder.bind(null, items.id)}
          onAdd={cartItemAddHandler.bind(null, items)}
        >
          {items.name}
        </CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onHiddenCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${ctx.totalAmount.toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHiddenCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
