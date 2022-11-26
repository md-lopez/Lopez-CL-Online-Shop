import { useContext } from "react";

import React, { useState } from "react";
import classes from "./ClothesItem.module.css";
import ClothesItemForm from "./ClothesItemForm";
import CartContext from "../../../store/cart-context";

//use context here
const ClothesItem = (props) => {
  const cartCtx = useContext(CartContext);

  let price = props.price.toFixed(0);
  let dec = ((props.price.toFixed(2) % 1) * 100).toFixed(0);

  if (dec <= 0) {
    dec = <span>00</span>;
  }

  if (dec <= 9) {
    dec = <span>0{dec}</span>;
  }
  if (dec >= 50) {
    price = price - 1;
  }

  let ship = '';

  if (props.shipping === true) {
    ship = <span className={classes.shipping}>Free shipping</span>
  }

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      style: props.style,
      cartImg: props.cartImg,
      shipping: props.shipping
    });
  };

  const [isHovering, setIsHovering] = useState(false);

  const mouseEnterHandler = (event) => {
    setIsHovering(true);
  };

  const mouseOutHandler = (event) => {
    setIsHovering(false);
  };

  let img = <img src={props.secondImg} className={classes.Img} alt="" />;

  if (!isHovering) {
    img = <img src={props.firstImg} className={classes.Img} alt="" />;
  }

  return (
    <div>
      <li
        className={classes.clothes}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseOutHandler}
      >
        {ship}
        {img}
        <h3 className={classes.name}>{props.name}</h3>
        <span className={classes.line}></span>
        <div className={classes.price}>
          <span>P &nbsp;</span> <span className={classes.priceText}>{price}</span>
          <span>.{dec}</span>
          </div>
          <ClothesItemForm
            className={classes[`${!isHovering ? "btn" : "btnHover"}`]}
            onAddToCart={addToCartHandler}
          >
            Add to carts
          </ClothesItemForm>
        
      </li>
    </div>
  );
};

export default ClothesItem;
