import { CHECK_USER_FAIL, CHECK_USER_SUCCESS } from "../../actions/User/types";
/**
 * CHECK User reducer.
 *
 * @param {object} state initialState object
 * @param {object} action from redux saga /sagas/userSignin.js
 * @returns {object} action.user
 */
const checkUser = (state = { name: "гость" }, action) => {
  switch (action.type) {
    case CHECK_USER_SUCCESS:
      console.log(action.user);
      return action.user;
    case CHECK_USER_FAIL:
      return state;
    default:
      return state;
  }
};

export default checkUser;
