import { CLEAR_TOKEN, SET_TOKEN } from "./tokenType";

export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    payload: token,
  };
};

export const clearToken = () => {
  return {
    type: CLEAR_TOKEN,
    payload: "",
  };
};
