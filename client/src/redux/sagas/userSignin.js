import { takeEvery, put, call } from "redux-saga/effects";
import API from "../../API";

export function* userSignin() {
  yield takeEvery("USER_SIGNIN_ASYNC", getUser);
}

const checkUser = async (user) =>
  await API.addUser.post("/users/signin", { user });

function* getUser() {
  yield put({ type: "USER_SIGNIN", user: yield call(checkUser) });
}
