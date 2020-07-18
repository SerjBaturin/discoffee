import { CHECK_USER_SUCCESS } from "./types";
export const checkUserSuccess = (payload) => ({
  type: CHECK_USER_SUCCESS,
  user: payload,
});
