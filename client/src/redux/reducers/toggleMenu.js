const toggleMenu = (state = false, action) => {
  switch (action.type) {
    case "MENU_TOGGLE":
      if (state === false) {
        return (state = true);
      }
      if (state === true) {
        return (state = false);
      }
    default:
      return state;
  }
};

export default toggleMenu;
