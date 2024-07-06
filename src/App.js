import React, { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meal from "./Components/Meals/Meal";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };
  const hiddenCartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <CartProvider>
      {cartIsShow && <Cart onHiddenCart={hiddenCartHandler} />}
      <Header onShowCart={showCartHandler} onHiddenCart={hiddenCartHandler} />
      <main>
        <Meal />
      </main>
    </CartProvider>
  );
}

export default App;
