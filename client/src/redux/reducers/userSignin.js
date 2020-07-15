const userSignin = (state = { email: "Guest", password: "Guest" }, action) => {
  switch (action.type) {
    case "USER_SIGNIN":
      return action.user;
    default:
      return state;
  }
};

export default userSignin;
