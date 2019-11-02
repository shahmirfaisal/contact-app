import React from "react";
import classes from "./SignUp.module.css";
import { withRouter } from "react-router-dom";

const SignUp = props => {
  return (
    <div className={classes.SignUp}>
      <h2>Sign Up</h2>

      <form className={classes.Form}>
        <input type="text" placeholder="Name..." />
        <input type="email" placeholder="Email..." />
        <input type="password" placeholder="Password..." />
        <button className={classes.btnSignUp}>SIGN UP</button>
        <p>Already have an account ?</p>
        <button
          onClick={e => {
            e.preventDefault();
            props.history.push("/log-in");
          }}
          className={classes.btnLogIn}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
