import { USER_SIGNUP_SUCCESS } from "./types";
export const userSignupSuccess = (payload) => ({
  type: USER_SIGNUP_SUCCESS,
  user: payload,
});
