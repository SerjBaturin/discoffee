import { all, fork } from "redux-saga/effects";
import { getUsers } from "./getUsers";
import { userSignin } from "./userSignin";
import { userSignup } from "./userSignup";

/**
 * Multiple sagas Root generator.
 *
 * @returns {array} arrays of sagas
 */
export default function* rootSaga() {
  yield all([fork(getUsers), fork(userSignin), fork(userSignup)]);
}
