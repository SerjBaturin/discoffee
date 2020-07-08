const initialState

const isLogged = (staqte = false, action) => {
  switch (action.type) {
    case "IS_LOGGED":
      return (state = true);
    default:
      return state;
  }
};

export default isLogged;
