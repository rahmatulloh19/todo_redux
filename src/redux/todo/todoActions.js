import { DELETE_TODO, EDIT_TODO, GET_SINGLE_TODO, GET_TODO, POST_TODO } from "./todoTypes";

export const getTodo = (todo) => {
  return {
    type: GET_TODO,
    payload: todo,
  };
};

export const getSingleTodo = (todoId) => {
  return {
    type: GET_SINGLE_TODO,
    payload: todoId,
  };
};

export const postTodo = (postedTodo) => {
  return {
    type: POST_TODO,
    payload: postedTodo,
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
};

export const editTodo = (editedTodo) => {
  return {
    type: EDIT_TODO,
    payload: editedTodo,
  };
};
