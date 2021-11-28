// importation type
import {
  GET_CONTACTS,
  GET_CONTACT,
  LOAD_CONTACTS,
  FAIL_CONTACTS,
  POST_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
} from "../actionTypes/contact";

// initialState
const initialState = {
  contactList: [],
  errors: null,
  load: false,
  contact: {},
  message: "",
};

// pure function
const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_CONTACTS:
      return { ...state, load: true };
    case GET_CONTACTS:
      return {
        ...state,
        load: false,
        contactList: payload.contacts,
      };
    case GET_CONTACT:
      return {
        ...state,
        load: false,
        contact: payload.contact,
      };
    case POST_CONTACT:
      return {
        ...state,
        load: false,
        contact: payload.contact,
        message: payload.message,
      };
    case EDIT_CONTACT:
      return {
        ...state,
        load: false,
        contact: payload.contact,
        message: payload.message,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        load: false,
        contact: payload.contact,
        message: payload.message,
      };
    case FAIL_CONTACTS:
      return { ...state, load: false, errors: payload };
    default:
      return state;
  }
};

export default contactReducer;
