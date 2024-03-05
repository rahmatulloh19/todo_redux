import { DELETE_TODO, EDIT_TODO, GET_SINGLE_TODO, GET_TODO, POST_TODO } from "./todoTypes";

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
    case POST_TODO:
      return {
        ...state,
        todo: state.todo.concat(action.payload),
      };
    case EDIT_TODO:
      return {
        ...state,
        todo: state.todo.map((todo) => (todo.id === action.payload.id ? action.payload : todo)),
      };
    case DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};
