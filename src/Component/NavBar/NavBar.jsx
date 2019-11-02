import React from "react";
import classes from "./NavBar.module.css";

const NavBar = props => {
  return (
    <div className={classes.NavBar}>
      <i onClick={props.openSideDrawer} className="fas fa-bars" />
      <h2>
        <i className="fas fa-address-book" />
        CONTACT APP
      </h2>
    </div>
  );
};

export default NavBar;
