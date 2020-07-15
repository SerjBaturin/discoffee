import { takeEvery, put, call } from "redux-saga/effects";
import API from "../../API";

// Get action from connected component
export function* userSignin() {
  yield takeEvery("USER_SIGNIN_ASYNC", getUser);
}

// Make request on server to get signin information
const checkUser = async (user) =>
  await API.addUser.post("/users/signin", { user });

// Send action into signin reducer
function* getUser() {
  yield put({ type: "USER_SIGNIN", user: yield call(checkUser) });
}
