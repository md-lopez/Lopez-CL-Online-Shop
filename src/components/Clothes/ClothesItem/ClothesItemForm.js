import { useRef, useState } from "react";

import Input from "../../Layout/UI/Input";
import classes from "./ClothesItemForm.module.css";

const ClothesItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const SubmitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);  
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  const styles = props.className;
  return (
    <form className={classes.form} onSubmit={SubmitHandler}>
      <div className={classes.inp}>
      <Input
        ref={amountInputRef}
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      </div>
      <div className={classes.wrapper}>
        <button className={styles}>{props.children}</button>
      </div>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default ClothesItemForm;
