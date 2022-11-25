import SizeSelector from "./UI/SizeSelector";
import Clothes from "../Clothes/Clothes";
import classes from "./Body.module.css";

const Body = () => {
  return (
    <div className={classes.wrapper}>
      <SizeSelector></SizeSelector>
      <main>
        <Clothes />
      </main>
    </div>
  );
};

export default Body;
