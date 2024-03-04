import { SET_USER } from "./userType";

export const setUser = (userData) => {
  return {
    type: SET_USER,
    payload: userData,
  };
};
