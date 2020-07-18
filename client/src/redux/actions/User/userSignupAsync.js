import { USER_SIGNUP_ASYNC } from "./types";
export const userSignupAsync = (payload) => ({
  type: USER_SIGNUP_ASYNC,
  user: payload,
});
