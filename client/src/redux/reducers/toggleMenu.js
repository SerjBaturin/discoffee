const toggleMenu = (state = false, action) => {
  switch (action.type) {
    case "MENU_OPEN":
      return (state = true);
    default:
      return state;
  }
};

export default toggleMenu;
