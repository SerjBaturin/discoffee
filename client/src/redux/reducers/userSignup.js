/**
 * User SignUp reducer.
 *
 * @param {object} state initialState object
 * @param {object} action from redux saga /sagas/userSignin.js
 * @returns {object} action.user
 */

const userSignup = (state = {}, action) => {
  switch (action.type) {
    case "USER_SIGNUP_SUCCESS":
      console.log("USER REGISTERED");
      return  action.user;
    case "USER_SIGNUP_ERROR":
      console.log("User did not register");
    default:
      return state;
  }
};

export default userSignup;
