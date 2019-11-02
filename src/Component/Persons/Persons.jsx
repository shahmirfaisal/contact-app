import React, { useContext } from "react";
import Person from "../Person/Person";
import ContactContext from "../../Context/Context";

const Persons = props => {
  const context = useContext(ContactContext);
  return (
    <div>
      {context.contacts.map((contact, i) => (
        <Person key={i} id={i + 1} name={contact.name} />
      ))}
    </div>
  );
};

export default Persons;
