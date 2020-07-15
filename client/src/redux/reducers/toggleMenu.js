const toggleMenu = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      state === false ? (state = true) : (state = false);
    default:
      return state;
  }
};

export default toggleMenu;
