import React, { useContext } from "react";
import Persons from "../Persons/Persons";
import classes from "./ContactList.module.css";
import ContactContext from "../../Context/Context";

const ContactList = () => {
  const context = useContext(ContactContext);
  const empty =
    context.contacts.length === 0 ? (
      <p style={{ textAlign: "center", opacity: "0.8" }}>
        Contact list is empty
      </p>
    ) : null;
  return (
    <div>
      <h2 className={classes.Title}>Contact List</h2>
      <Persons />
      {empty}
    </div>
  );
};

export default ContactList;
