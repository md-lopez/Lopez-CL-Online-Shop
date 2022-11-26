import React, { Fragment } from 'react';
import classes from './SizeSelector.module.css'

const SizeSelector = () => {
    return(
    <Fragment>
    
    <div className={classes.wrapper}>
    <p>Sizes:</p>
    <div className={classes.break1}></div>
    <button className={classes.XSButton}>XS</button>
    <button className={classes.SButton}>S</button>
    <button className={classes.MButton}>M</button>
    <button className={classes.MLButton}>ML</button>
    <div className={classes.break2}></div>
    <button className={classes.LButton}>L</button>
    <button className={classes.XLButton}>XL</button>
    <button className={classes.XXLButton}>XXL</button>
    <span className={classes.desc}>Created by: Marco Lopez</span>
    </div>
    </Fragment>
    
    );
};

export default SizeSelector;