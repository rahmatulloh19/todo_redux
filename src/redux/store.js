import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { tokenReducer } from "./token/tokenReducer";
import { userReducer } from "./user/userReducer";

const rootReducer = combineReducers({
  tokenReducer,
  userReducer,
});
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
