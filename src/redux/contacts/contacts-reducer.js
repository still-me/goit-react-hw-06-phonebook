import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./contacts-actions";

const items = createReducer([], {
  [actions.add]: (state, { payload }) => [...state, payload],
  [actions.remove]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
