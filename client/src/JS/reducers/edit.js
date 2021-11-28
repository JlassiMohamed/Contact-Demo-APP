// importation Type
import { TOGGLE_ADD, TOGGLE_EDIT } from "../actionTypes/edit";

// initial state
const initialState = {
  edit: false,
};
// pure function
const editReducer = (state = initialState, { type }) => {
  switch (type) {
    case TOGGLE_EDIT:
      return { ...state, edit: true };
    case TOGGLE_ADD:
      return { ...state, edit: false };
    default:
      return state;
  }
};
export default editReducer;
