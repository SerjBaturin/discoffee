import { combineReducers } from "redux";
import toggleMenu from "./toggleMenu";
import isLogged from "./isLogged";
import getUsers from "./getUsers";

export default combineReducers({
  toggleMenu,
  isLogged,
  getUsers,
});
