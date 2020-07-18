import { takeEvery, put, call } from "redux-saga/effects";
import API from "../../../API/User";
import { USER_SIGNIN_ASYNC } from "../../actions/User/types";
import { userSigninSuccess } from "../../actions/User/userSigninSuccess";
import { userSigninError } from "../../actions/User/userSigninError";

// Get action from connected component
export function* userSignin() {
  yield takeEvery(USER_SIGNIN_ASYNC, getUser);
}

// Saga Worker
// CALL method needs to arguments
function* getUser(action) {
  try {
    const user = yield call(
      API.getUser.get,
      `/${action.payload.email}&${action.payload.password}`,
    );
    yield put(userSigninSuccess(user.data));
  } catch (err) {
    yield put(userSigninError());
  }
}
