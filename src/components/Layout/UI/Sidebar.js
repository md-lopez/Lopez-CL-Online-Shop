import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Sidebar.module.css";

const SidebarOverlay = (props) => {


  return (
    <div className={classes.wrapper}>
      <button className={classes["button--alt"]} onClick={props.onHide}>
        X
      </button>
      <div className={classes.sidebar}>
        <div className={classes.content}>{props.children}</div>
      </div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Sidebar = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <SidebarOverlay onHide={props.onClick}>
          {props.children}
        </SidebarOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Sidebar;
