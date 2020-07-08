const initialState = { isLogged: false, name: "Log in" };

const isLogged = (state = initialState, action) => {
  switch (action.type) {
    case "IS_LOGGED":
      if (state.isLogged === false) {
        return { isLogged: true, name: "Log out" };
      } else {
        return { isLogged: false, name: "Log in" };
      }

    default:
      return state;
  }
};

export default isLogged;
