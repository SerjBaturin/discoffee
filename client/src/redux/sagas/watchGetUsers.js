import { takeEvery, put, call } from "redux-saga/effects";
import API from "../../API";

export function* watchGetUsers() {
  yield takeEvery("GET_USERS_ASYNC", getAllUsers);
}

const fetchUsers = async () => (await API.getUsers("/users")).data;

function* getAllUsers() {
  yield put({ type: "GET_USERS", users: yield call(fetchUsers) });
}
