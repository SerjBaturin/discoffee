import {
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_ERROR,
} from "../../actions/User/types";
/**
 * User SignIn reducer.
 *
 * @param {object} state initialState object
 * @param {object} action from redux saga /sagas/userSignin.js
 * @returns {object} action.user
 */
const userSignin = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_SUCCESS:
      return action.user;
    case USER_SIGNIN_ERROR:
      console.log("User not found");
    default:
      return state;
  }
};

export default userSignin;
