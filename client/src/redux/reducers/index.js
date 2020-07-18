import { combineReducers } from "redux";
import toggleMenu from "./common/toggleMenu";
import isLogged from "./isLogged";
import getUsers from "./Admin/getUsers";
import userSignin from "./User/userSignin";
import userSignup from "./User/userSignup";
import getUser from "./User/getUser";

/**
 * Entry point (Root Reducer) for others.
 */
export default combineReducers({
  toggleMenu,
  isLogged,
  getUsers,
  userSignin,
  userSignup,
  getUser,
});
