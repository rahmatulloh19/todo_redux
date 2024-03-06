import { GET_SINGLE_TODO, GET_TODO } from "./todoTypes";

const initialState = {
  todo: [],
  editingTodo: {},
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO:
      return {
        ...state,
        todo: action.payload,
      };
    case GET_SINGLE_TODO:
      return {
        ...state,
        editingTodo: state.todo.find((todo) => todo.id === action.payload),
      };
    default:
      return state;
  }
};
