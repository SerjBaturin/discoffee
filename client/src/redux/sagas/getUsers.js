import { takeEvery, put, call, delay } from "redux-saga/effects";
import API from "../../API";

export function* getUsers() {
  yield takeEvery("GET_USERS_ASYNC", getAllUsers);
}

const fetchUsers = async () => (await API.getUsers.get("/users")).data;

function* getAllUsers() {
  yield delay(1000);
  yield put({ type: "GET_USERS", users: yield call(fetchUsers) });
}
