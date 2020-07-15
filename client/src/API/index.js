import { getUsers } from "./getUsers";
import { addUser } from "./addUser";
import { getUser } from "./getUser";

/**
 * API entry point.
 *
 * CRUD operations with Axios instaces.
 * API methods call in redux-saga async functions.
 */
const API = {
  getUsers: getUsers(),
  addUser: addUser(),
  getUser: getUser(),
};

export default API;
