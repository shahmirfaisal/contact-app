import React from "react";
import classes from "./LogIn.module.css";
import { withRouter } from "react-router-dom";

const LogIn = props => {
  return (
    <div className={classes.SignUp}>
      <h2>LOGIN</h2>

      <form className={classes.Form}>
        <input type="email" placeholder="Email..." />
        <input type="password" placeholder="Password..." />
        <button className={classes.btnSignUp}>LOGIN</button>
        <p>Want to creat new account ?</p>
        <button
          onClick={e => {
            e.preventDefault();
            props.history.push("/sign-up");
          }}
          className={classes.btnLogIn}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default withRouter(LogIn);
