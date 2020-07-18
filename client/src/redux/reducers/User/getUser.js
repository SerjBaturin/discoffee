/**
 * GET User reducer.
 *
 * @param {object} state initialState object
 * @param {object} action from redux saga /sagas/userSignin.js
 * @returns {object} action.user
 */

const getUser = (state = { name: "гость" }, action) => {
  switch (action.type) {
    case "GET_USER_SUCCESS":
      return action.user;
    case "GET_USER_FAIL":
      return state;
    default:
      return state;
  }
};

export default getUser;
