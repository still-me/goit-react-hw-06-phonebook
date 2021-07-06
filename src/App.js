import React, { Component } from "react";
import shortid from "shortid";

import Section from "./Section";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem("contacts"));

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const prevContacts = prevState.contacts;
    const nextContacts = this.state.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem("contacts", JSON.stringify(nextContacts));
    }
  }

  addContact = (name, number) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    const { contacts } = this.state;
    const includesContact = contacts.find(
      (contact) => contact.name === newContact.name
    );

    includesContact
      ? alert(`${includesContact.name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = (contactId) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}

export default App;
