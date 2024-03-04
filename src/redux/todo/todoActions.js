import { EDIT_TODO, POST_TODO } from "./todoTypes";

export const postTodo = (postedTodo) => {
  return {
    type: POST_TODO,
    payload: postedTodo,
  };
};

export const deleteTodo = () => {
  return {
    type: POST_TODO,
    payload: "",
  };
};

export const editTodo = (editedTodo) => {
  return {
    type: EDIT_TODO,
    payload: editedTodo,
  };
};
