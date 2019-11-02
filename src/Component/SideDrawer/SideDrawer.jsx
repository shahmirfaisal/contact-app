import React from "react";
import classes from "./SideDrawer.module.css";

const SideDrawer = props => {
  const classNames = [classes.SideDrawer, props.open ? classes.Open : null];
  return (
    <div className={classNames.join(" ")}>
      <h3 className={classes.Title}>
        <i className="fas fa-address-book" />
        CONTACT APP
      </h3>
      <p onClick={() => props.openPage("/")}>Create Contact</p>
      <p onClick={() => props.openPage("/contact-list")}>Contact List</p>
    </div>
  );
};

export default SideDrawer;
