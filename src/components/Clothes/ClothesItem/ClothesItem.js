import { useContext } from 'react';

import React, { useState } from "react";
import classes from "./ClothesItem.module.css";
import ClothesItemForm from "./ClothesItemForm";
import CartContext from '../../../store/cart-context';

//use context here
const ClothesItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `P${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price,
        style: props.style,
        cartImg: props.cartImg
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
        {img}
        <h3 className={classes.name}>{props.name}</h3>
        <div className={classes.price}>
          {price}
          <ClothesItemForm
            className={classes[`${!isHovering ? "btn" : "btnHover"}`]}
            onAddToCart={addToCartHandler}
          >
            Add to cart
          </ClothesItemForm>
        </div>
      </li>
    </div>
  );
};

export default ClothesItem;
