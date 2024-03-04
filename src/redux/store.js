import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { tokenReducer } from "./token/tokenReducer";

const rootReducer = combineReducers({
  tokenReducer,
});
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
