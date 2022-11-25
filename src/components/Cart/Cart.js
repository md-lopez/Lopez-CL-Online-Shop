import { useContext } from "react";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Sidebar from "../Layout/UI/Sidebar";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = (item) => {};

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          style={item.style}
          cartImg={item.cartImg}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Sidebar onClick={props.onClose}>
      <div className={classes.wrapper}>
        <div className={classes["upper--content"]}>{cartItems}</div>
        <div className={classes["bottom--content"]}>
          <div className={classes.total}>
            <span className={classes["subtotal--word"]}>SUBTOTAL</span>
            <span className={classes["total--price"]}>P {totalAmount}</span>
          </div>
          <div className={classes.actions}>
            {hasItems && (
              <button className={classes["checkout--button"]}>CHECKOUT</button>
            )}
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default Cart;
