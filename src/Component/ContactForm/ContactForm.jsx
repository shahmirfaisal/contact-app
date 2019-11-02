import React, { useState } from "react";
import classes from "./ContactForm.module.css";
import Alert from "../Alert/Alert";

const ContactForm = props => {
  const [alert, changeAlert] = useState(null);

  const removeAlert = () => {
    setTimeout(() => changeAlert(null), 2000);
  };

  const createContactHandler = e => {
    e.preventDefault();
    const name = props.name.trim();
    const email = props.email.trim();
    const number = props.number.trim();
    if (name !== "" && email !== "" && number !== "") {
      props.createContact();
      changeAlert(<Alert success>Contact Created Successfully</Alert>);
      removeAlert();
    }
    if (name === "" || email === "" || number === "") {
      changeAlert(<Alert>Please Fill All The Fields</Alert>);
      removeAlert();
    }
  };

  return (
    <div>
      <h2 className={classes.Title}>Create Contact</h2>
      {alert}
      <form className={classes.Form}>
        <label>Name</label>
        <input
          onChange={props.changeName}
          value={props.name}
          type="text"
          placeholder="Name..."
        />
        <label>Email</label>
        <input
          onChange={props.changeEmail}
          value={props.email}
          type="email"
          placeholder="Email..."
        />
        <label>Number</label>
        <input
          onChange={props.changeNumber}
          value={props.number}
          type="number"
          placeholder="Number..."
        />
        <br />
        <button onClick={createContactHandler}>CREATE</button>
      </form>
    </div>
  );
};

export default ContactForm;
