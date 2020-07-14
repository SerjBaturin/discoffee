import { all, fork } from "redux-saga/effects";
import { getUsers } from "./getUsers";

export default function* rootSaga() {
  yield all([fork(getUsers)]);
}
