import { CLEAR_USER, SET_USER } from "./userType";

const initialState = {
  user: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        user: action.payload,
      };
    case CLEAR_USER:
      return {
        user: "",
      };
    default:
      return state;
  }
};
