/**
 * User SignIn reducer.
 *
 * @param {object} state initialState object
 * @param {object} action from redux saga /sagas/userSignin.js
 * @returns {object} action.user
 */

const userSignin = (state = {}, action) => {
  switch (action.type) {
    case "USER_SIGNIN":
      return action.user;
    default:
      return state;
  }
};

export default userSignin;
