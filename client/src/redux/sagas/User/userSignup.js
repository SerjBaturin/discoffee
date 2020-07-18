import { takeEvery, put, call } from "redux-saga/effects";
import API from "../../../API/User";
import { USER_SIGNUP_ASYNC } from "../../actions/User/types";
import { userSignupSuccess } from "../../actions/User/userSignupSucces";
import { userSignupError } from "../../actions/User/userSignupError";

// Get action from connected component
export function* userSignup() {
  yield takeEvery(USER_SIGNUP_ASYNC, addUser);
}

// Saga Worker
// CALL method needs to arguments
function* addUser(action) {
  try {
    const user = yield call(API.addUser.post, "/add", action.user);
    yield put(userSignupSuccess(user.data));
  } catch (err) {
    yield put(userSignupError());
  }
}
