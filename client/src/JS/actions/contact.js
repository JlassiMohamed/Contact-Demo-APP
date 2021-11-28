import axios from "axios";
import {
  LOAD_CONTACTS,
  FAIL_CONTACTS,
  GET_CONTACTS,
  GET_CONTACT,
  DELETE_CONTACT,
  POST_CONTACT,
  EDIT_CONTACT,
} from "../actionTypes/contact";

export const getContacts = () => async (dispatch) => {
  dispatch({ type: LOAD_CONTACTS });
  try {
    let result = await axios.get(`/api/users/`);
    console.log(result);
    dispatch({ type: GET_CONTACTS, payload: result.data }); //result.data = {message:"",contacts:[]}
  } catch (error) {
    dispatch({ type: FAIL_CONTACTS, payload: error });
  }
};

export const getContact = (id) => async (dispatch) => {
  try {
    let result = await axios.get(`/api/users/${id}`);
    console.log(result);
    dispatch({ type: GET_CONTACT, payload: result.data });
  } catch (error) {
    dispatch({
      type: FAIL_CONTACTS,
      payload: error.response,
    });
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    const result = await axios.delete(`/api/users/${id}`);
    dispatch({ type: DELETE_CONTACT, payload: result.data });
    dispatch(getContacts());
    alert(result.data.message);
  } catch (error) {
    dispatch({ type: FAIL_CONTACTS, payload: error });
  }
};

export const postContact = (newUser) => async (dispatch) => {
  try {
    const result = await axios.post("/api/users", newUser);
    dispatch({ type: POST_CONTACT, payload: result.data });
    dispatch(getContacts());
    alert(result.data.message);
  } catch (error) {
    dispatch({
      type: FAIL_CONTACTS,
      payload: error.response,
    });
  }
};

export const editContact = (id, newContact) => async (dispatch) => {
  try {
    const result = await axios.put(`/api/users/${id}`, newContact);
    dispatch({ type: EDIT_CONTACT, payload: result.data });
    dispatch(getContacts());
    setTimeout(() => {
      alert(result.data.message);
    }, 1000);
  } catch (error) {
    dispatch({
      type: FAIL_CONTACTS,
      payload: error.response,
    });
  }
};
