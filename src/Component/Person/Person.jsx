import React, { useContext } from "react";
import classes from "./Person.module.css";
import ContactContext from "../../Context/Context";

const Person = props => {
  const context = useContext(ContactContext);
  return (
    <div
      onClick={() => context.showDetails(props.id - 1)}
      className={classes.Person}
    >
      <p>{props.id}.</p>
      <p>{props.name}</p>
    </div>
  );
};

export default Person;
