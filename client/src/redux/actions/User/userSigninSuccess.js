import { USER_SIGNIN_SUCCESS } from "./types";
export const userSigninSuccess = (payload) => ({
  type: USER_SIGNIN_SUCCESS,
  user: payload,
});
