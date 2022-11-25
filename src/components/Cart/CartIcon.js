import { Fragment } from "react";
import classes from './CartIcon.module.css';

const CartIcon = () => {
    return(
        <Fragment>
            <img className={classes.icon} src="/images/cartIcon.png" alt="cart-icon" />
        </Fragment>
    );
};

export default CartIcon;