import { GET_SINGLE_TODO, GET_TODO } from "./todoTypes";

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
