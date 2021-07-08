import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./ContactList.scss";
import * as contactsActions from "../../redux/contacts/contacts-actions";

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className="contacts__list">
    {contacts.map(({ id, name, number }) => (
      <li className="contacts__item" key={id}>
        <p className="contact__info">
          {name}: {number}
        </p>
        <button
          className="contact__button--delete"
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.defaultProps = {
  onDeleteContact: () => null,
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func,
};

const getVisibleContacts = (items, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return items.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(contactsActions.remove(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
