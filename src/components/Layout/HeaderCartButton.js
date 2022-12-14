import { useContext } from 'react';

import CartIcon from "../Cart/CartIcon";
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return(
    <button className={classes.button} onClick={props.onClick}>
            <CartIcon />
            <span className={classes.itemNum}>{numberOfCartItems}</span>
    </button>
    );
};

export default HeaderCartButton;