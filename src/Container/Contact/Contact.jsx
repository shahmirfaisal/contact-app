import React, { Component } from "react";
import Layout from "../Layout/Layout";
import ContactForm from "../../Component/ContactForm/ContactForm";
import ContactList from "../../Component/ContactList/ContactList";
import { Route, Switch } from "react-router-dom";
import ContactContext from "../../Context/Context";
import Modal from "../../Component/Modal/Modal";
import BackDrop from "../../Component/BackDrop/BackDrop";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    number: "",
    valid: false,
    contactId: 0,
    contacts: [],
    showDetails: false,
    details: {},
    modalType: "details"
  };

  componentDidMount() {
    let contacts;
    if (localStorage.getItem("contacts") !== null) {
      contacts = JSON.parse(localStorage.getItem("contacts"));
    } else {
      contacts = [];
    }
    this.setState({ contacts });
    if (contacts.length === 0) {
    } else {
      this.setState({ contactId: contacts[contacts.length - 1].id });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  nameChangeHandler = e => {
    this.setState({ name: e.target.value });
  };
  emailChangeHandler = e => {
    this.setState({ email: e.target.value });
  };
  numberChangeHandler = e => {
    this.setState({ number: e.target.value });
  };

  createContact = () => {
    const contacts = this.state.contacts;
    let id = this.state.contactId;
    id++;
    const name = this.state.name.trim();
    const email = this.state.email.trim();
    const number = this.state.number.trim();
    contacts.push({ id, name, email, number });
    this.setState({ contacts, name: "", email: "", number: "", contactId: id });
  };

  deleteContact = contact => {
    let contacts = this.state.contacts;
    let newContacts = contacts.filter(v => v.id !== contact.id);
    this.setState({ contacts: newContacts, showDetails: false });
  };

  deleteContactHandler = () => {
    this.setState({ modalType: "delete" });
  };
  deleteCancelHandler = () => {
    this.setState({ showDetails: false });
  };

  showDetails = index => {
    const person = this.state.contacts[index];
    const details = {
      id: person.id,
      name: person.name,
      email: person.email,
      number: person.number
    };
    this.setState({ showDetails: true, details, modalType: "details" });
  };
  closeDetails = () => {
    this.setState({ showDetails: false });
  };

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <ContactForm
                  name={this.state.name}
                  email={this.state.email}
                  number={this.state.number}
                  changeName={this.nameChangeHandler}
                  changeEmail={this.emailChangeHandler}
                  changeNumber={this.numberChangeHandler}
                  createContact={this.createContact}
                />
              )}
            />
            <Route
              path="/contact-list"
              render={() => (
                <ContactContext.Provider
                  value={{
                    contacts: this.state.contacts,
                    showDetails: this.showDetails
                  }}
                >
                  <ContactList />
                </ContactContext.Provider>
              )}
            />
            <Route
              render={() => (
                <h1
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-150%)"
                  }}
                >
                  Not Found
                </h1>
              )}
            ></Route>
          </Switch>
        </Layout>
        <Modal
          type={this.state.modalType}
          show={this.state.showDetails}
          details={this.state.details}
          deleteContact={this.deleteContact}
          deleteContactHandler={this.deleteContactHandler}
          deleteCancelHandler={this.deleteCancelHandler}
        />
        <BackDrop open={this.state.showDetails} close={this.closeDetails} />
      </div>
    );
  }
}

export default Contact;
