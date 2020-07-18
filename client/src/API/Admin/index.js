import { getUsers } from "./getUsers";

/**
 * API entry point.
 *
 * CRUD operations with Axios instaces.
 * API methods call in redux-saga async functions.
 */
const API = {
  getUsers: getUsers(),
};

export default API;
