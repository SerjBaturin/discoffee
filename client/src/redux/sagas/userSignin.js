import { takeEvery, put, call } from "redux-saga/effects";
import API from "../../API";

// Get action from connected component
export function* userSignin() {
  yield takeEvery("USER_SIGNIN_ASYNC", getUser);
}

// Saga Worker
// CALL method needs to arguments
function* getUser(action) {
  try {
    const user = yield call(
      API.getUser.get,
      `/admin/users/${action.payload.email}&${action.payload.password}`,
    );
    yield put({ type: "USER_SIGNIN_SUCCESS", user: user.data });
  } catch (err) {
    yield put({ type: "USER_SIGNIN_ERROR" });
  }
}
