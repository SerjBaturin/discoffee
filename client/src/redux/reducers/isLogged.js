const initialState = { isLogged: false, name: "Log in" };

/**
 * Is Logged reducer.
 *
 * @param {object} state initialState object
 * @param {object} action from connected component
 * @returns {object} {isLogged: boolean, name: string}
 */
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
