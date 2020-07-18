import { TOGGLE_MENU } from "../../actions/common/types";
/**
 * Toggle menu reducer.
 *
 * @param {boolean} state initialState false
 * @param {object} action from connected component
 * @returns {boolean} true or false
 */
const toggleMenu = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      state === false ? (state = true) : (state = false);
    default:
      return state;
  }
};

export default toggleMenu;
