import React from "react";
import classes from "./StartScreen.module.css";
import Image from "../../Images/register.svg";
import { withRouter } from "react-router-dom";

const StartScreen = props => {
  return (
    <div className={classes.Start}>
      <h2 className={classes.Title}>Contact App</h2>
      <img src={Image} />
      <p>Contact App helps you to manage your mobile contacts.</p>
      <button onClick={() => props.history.push("/sign-up")}>
        GET STARTED
      </button>
    </div>
  );
};

export default withRouter(StartScreen);
