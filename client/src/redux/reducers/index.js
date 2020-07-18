import { combineReducers } from "redux";
import toggleMenu from "./common/toggleMenu";
import getUsers from "./Admin/getUsers";
import userSignin from "./User/userSignin";
import userSignup from "./User/userSignup";
import checkUser from "./User/checkUser";

/**
 * Entry point (Root Reducer) for others.
 */
export default combineReducers({
  toggleMenu,
  getUsers,
  userSignin,
  userSignup,
  checkUser,
});
