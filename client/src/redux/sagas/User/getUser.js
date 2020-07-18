import { call, put, takeEvery } from "redux-saga/effects";
import { GET_USER_ASYNC } from "../../actions/User/types";
import API from "../../../API/User";

// Get action from connected component
export function* getUser() {
  yield takeEvery(GET_USER_ASYNC, checkUser);
}

// Saga Worker
// CALL method needs arguments
function* checkUser() {
  try {
    const user = yield call(API.getUser.get, "/check");
    user.data === ""
      ? yield put({ type: "GET_USER_FAIL" })
      : yield put({ type: "GET_USER_SUCCESS", user: user.data });
  } catch (err) {
    yield console.log(err);
  }
}
