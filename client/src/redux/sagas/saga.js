import { takeLatest, put, delay } from "redux-saga/effects";

let count = 1;
function* testAsync() {
  yield delay(1000);
  yield put({ type: "TEST_ASYNC", value: count++ });
}

export function* watchTest() {
  yield takeLatest("TEST", testAsync);
}
