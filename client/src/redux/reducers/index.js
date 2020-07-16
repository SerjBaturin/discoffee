import { combineReducers } from "redux";
import toggleMenu from "./toggleMenu";
import isLogged from "./isLogged";
import getUsers from "./getUsers";
import userSignin from "./userSignin";
import userSignup from "./userSignup";

/**
 * Entry point (Root Reducer) for others.
 */
export default combineReducers({
  toggleMenu,
  isLogged,
  getUsers,
  userSignin,
  userSignup,
});
