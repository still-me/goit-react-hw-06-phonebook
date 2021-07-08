import shortid from "shortid";

import * as actionTypes from "./contacts-types";

export const add = (name, number) => ({
  type: actionTypes.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

export const remove = (contactId) => ({
  type: actionTypes.REMOVE,
  payload: contactId,
});

export const changeFilter = (value) => ({
  type: actionTypes.CHANGE_FILTER,
  payload: value,
});
