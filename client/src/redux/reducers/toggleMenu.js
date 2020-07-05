const toggleMenu = (state = false, action) => {
  switch (action.type) {
    case "MENU_TOGGLE":
      state === false ? (state = true) : (state = false);
    default:
      return state;
  }
};

export default toggleMenu;
