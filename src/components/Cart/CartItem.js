import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `P ${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <img src={props.cartImg} className={classes.img} alt="" />
      
        <div className={classes.details}>
        <p className={classes.name}>{props.name}</p>
        <p className={classes.style}>{props.style}</p>
        <p className={classes.quantity}>Quantity: {props.amount}</p>
        </div>
          
          
      <div className={classes.actions}>
      <span className={classes.price}>{price}</span>
      <div className={classes.addRemovebtn}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
