import React, { Component } from "react";
import "./ContactForm.scss";

const INITIAL_STATE = {
  name: "",
  number: "",
};

class ContactForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handelChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handelSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;

    this.props.onSubmit(name, number);

    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className="form" onSubmit={this.handelSubmit}>
        <label className="form__label">
          Name
          <input
            className="form__input"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={this.handelChange}
          />
        </label>
        <label className="form__label">
          Number
          <input
            className="form__input"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={this.handelChange}
          />
        </label>
        <button className="form__button" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
