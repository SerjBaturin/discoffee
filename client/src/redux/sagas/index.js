import { all, fork } from "redux-saga/effects";
import { watchGetUsers } from "./watchGetUsers";

export default function* rootSaga() {
  yield all([fork(watchGetUsers)]);
}
