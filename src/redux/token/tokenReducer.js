import { SET_TOKEN } from "./tokenType";

const initialState = {
  incomingToken: "",
};

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        incomingToken: action.payload,
      };
    default:
      return state;
  }
};
