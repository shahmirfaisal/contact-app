import React from "react";
import classes from "./BackDrop.module.css";

const BackDrop = props => {
  const classNames = [classes.BackDrop, props.open ? classes.Open : null];
  return <div onClick={props.close} className={classNames.join(" ")} />;
};

export default BackDrop;
