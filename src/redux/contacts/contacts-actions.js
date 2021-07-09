import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

export const add = createAction("contact/add", (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

export const remove = createAction("contacts/remove");

export const changeFilter = createAction("contacts/changeFilter");
