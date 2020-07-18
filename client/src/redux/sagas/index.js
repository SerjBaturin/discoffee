import { all, fork } from "redux-saga/effects";
import { getUsers } from "./Admin/getUsers";
import { userSignin } from "./User/userSignin";
import { userSignup } from "./User/userSignup";
import { checkUser } from "./User/checkUser";

/**
 * Multiple sagas Root generator.
 *
 * @returns {array} arrays of sagas
 */
export default function* rootSaga() {
  yield all([
    fork(getUsers),
    fork(userSignin),
    fork(userSignup),
    fork(checkUser),
  ]);
}
