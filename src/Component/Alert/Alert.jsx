import React from "react";
import classes from "./Alert.module.css";

const Alert = props => {
  const classNames = [
    classes.Alert,
    props.success ? classes.Success : classes.Danger
  ];
  return <div className={classNames.join(" ")}>{props.children}</div>;
};

export default Alert;
