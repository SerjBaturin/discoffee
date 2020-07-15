import { all, fork } from "redux-saga/effects";
import { getUsers } from "./getUsers";
import { userSignin } from "./userSignin";

export default function* rootSaga() {
  yield all([fork(getUsers), fork(userSignin)]);
}
