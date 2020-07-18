import { GET_USERS } from "../../actions/Admin/types";
/**
 * Get all users reducer.
 *
 * @param {object} state initialState empty array
 * @param {object} action from redux saga /sagas/getUsers.js
 * @returns {object} action.users
 */
const getUsers = (state = [], action) => {
  switch (action.type) {
    case GET_USERS:
      return action.users;
    default:
      return state;
  }
};

export default getUsers;
