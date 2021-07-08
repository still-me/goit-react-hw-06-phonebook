import React, { Component } from "react";
import shortid from "shortid";

import Section from "./components/Section";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  //TODO
  // componentDidMount() {
  //   const parsedContacts = JSON.parse(localStorage.getItem("contacts"));

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  //TODO
  // componentDidUpdate(prevProps, prevState) {
  //   const prevContacts = prevState.contacts;
  //   const nextContacts = this.state.contacts;

  //   if (nextContacts !== prevContacts) {
  //     localStorage.setItem("contacts", JSON.stringify(nextContacts));
  //   }
  // }

  addContact = (name, number) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    const { contacts } = this.state;
    //TODO
    const includesContact = contacts.find(
      (contact) => contact.name === newContact.name
    );

    includesContact
      ? alert(`${includesContact.name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  // deleteContact = (contactId) => {
  //   this.setState(({ contacts }) => ({
  //     contacts: contacts.filter((contact) => contact.id !== contactId),
  //   }));
  // };

  // changeFilter = (e) => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  // getVisibleContacts = () => {
  //   const { filter, contacts } = this.state;
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  render() {
    // const { filter } = this.state;
    // const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </div>
    );
  }
}

export default App;
