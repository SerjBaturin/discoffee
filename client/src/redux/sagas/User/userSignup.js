import { takeEvery, put, call } from "redux-saga/effects";
import API from "../../../API/User";

// Get action from connected component
export function* userSignup() {
  yield takeEvery("USER_SIGNUP_ASYNC", addUser);
}

// Saga Worker
// CALL method needs to arguments
function* addUser(action) {
  try {
    const user = yield call(API.addUser.post, "/add", action.user);
    yield put({ type: "USER_SIGNUP_SUCCESS", user: user.data });
  } catch (err) {
    yield put({ type: "USER_SIGNUP_ERROR" });
  }
}
