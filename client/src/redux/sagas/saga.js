import { takeEvery, put, delay } from "redux-saga/effects";

function* testAsync() {
  yield delay(4000);
  yield put({ type: "TEST_ASYNC", value: "SAGA test" });
}

export function* watchTest() {
  yield takeEvery("TEST", testAsync);
}
