import { takeEvery, put, call } from "redux-saga/effects";
import API from "../../../API/Admin";

// Get action from connected component
export function* getUsers() {
  yield takeEvery("GET_USERS_ASYNC", getAllUsers);
}

// Make request on server to get signin information
const fetchUsers = async () => (await API.getUsers.get("/users")).data;

// Send action into getting users reducer with users payload
function* getAllUsers() {
  yield put({ type: "GET_USERS", users: yield call(fetchUsers) });
}
