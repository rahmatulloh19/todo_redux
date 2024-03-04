import { DELETE_TODO, EDIT_TODO, POST_TODO } from "./todoTypes";

const initialState = [];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_TODO:
      return {
        ...state,
      };
    case EDIT_TODO:
      return {
        ...state,
      };
    case DELETE_TODO:
      return {
        ...state,
      };
    default:
      return state;
  }
};
