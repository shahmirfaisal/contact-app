import React from "react";
import classes from "./Modal.module.css";

const Modal = props => {
  const classNames = [classes.Modal, props.show ? classes.Open : null];
  let details =
    props.type === "details" ? (
      <div className={classNames.join(" ")}>
        <h3>Details</h3>
        <p>
          <i className="fas fa-user" />
          {props.details.name}
        </p>
        <p>
          <i className="fas fa-envelope" />
          {props.details.email}
        </p>
        <p>
          <i className="fas fa-phone" />
          {props.details.number}
        </p>
        <button className={classes.Delete} onClick={props.deleteContactHandler}>
          Delete ?
        </button>
      </div>
    ) : (
      <div className={classNames.join(" ")}>
        <p>Are you sure to delete this contact ?</p>
        <button
          className={classes.Yes}
          onClick={() => props.deleteContact(props.details)}
        >
          Yes
        </button>
        <button onClick={props.deleteCancelHandler}>Cancel</button>
      </div>
    );
  return <div>{details}</div>;
};

export default Modal;
