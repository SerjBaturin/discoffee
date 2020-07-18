import { takeEvery, put, call } from "redux-saga/effects";
import API from "../../../API/Admin";
import { GET_USERS_ASYNC } from "../../actions/Admin/types";
import { getUsersList } from "../../actions/Admin/getUsersList";

// Get action from connected component
export function* getUsers() {
  yield takeEvery(GET_USERS_ASYNC, getAllUsers);
}

// Make request on server to get signin information
const fetchUsers = async () => (await API.getUsers.get("/users")).data;

// Send action into getting users reducer with users payload
function* getAllUsers() {
  yield put(getUsersList(yield call(fetchUsers)));
}
