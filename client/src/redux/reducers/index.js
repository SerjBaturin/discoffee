import { combineReducers } from "redux";
import toggleMenu from "./toggleMenu";
import isLogged from "./isLogged";
import test from "./test";

export default combineReducers({
  toggleMenu,
  isLogged,
  test,
});
