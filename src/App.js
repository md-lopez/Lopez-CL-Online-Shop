import { useState } from "react";
import Header from "./components/Layout/Header";
import Body from "./components/Layout/Body";
import Cart from "./components/Cart/Cart";
import classes from './App.module.css'
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  // try not hiding the cart component by not un-rendering it.

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Body />
      </main>
    </CartProvider>
  );
}

export default App;
