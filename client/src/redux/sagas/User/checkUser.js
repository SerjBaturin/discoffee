import { call, put, takeEvery } from "redux-saga/effects";
import { CHECK_USER_ASYNC } from "../../actions/User/types";
import { checkUserSuccess } from "../../actions/User/checkUserSuccess";
import { checkUserFail } from "../../actions/User/checkUserFail";
import API from "../../../API/User";

// Get action from connected component
export function* checkUser() {
  yield takeEvery(CHECK_USER_ASYNC, checkUserWarker);
}

// Saga Worker
// CALL method needs arguments
function* checkUserWarker() {
  try {
    const user = yield call(API.getUser.get, "/check");
    user.data === ""
      ? yield put(checkUserFail())
      : yield put(checkUserSuccess(user.data));
  } catch (err) {
    yield console.log(err);
  }
}
