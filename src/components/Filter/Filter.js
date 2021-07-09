import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./Filter.scss";
import * as contactsActions from "../../redux/contacts/contacts-actions";

const Filter = ({ value, onChange }) => (
  <label className="filter__label">
    Find contacts by name
    <input
      className="filter__input"
      type="text"
      value={value}
      onChange={onChange}
    ></input>
  </label>
);

Filter.defaultProps = {
  onChange: () => null,
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
