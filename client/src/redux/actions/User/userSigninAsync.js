import { USER_SIGNIN_ASYNC } from "./types";
export const userSigninAsync = (payload) => ({
  type: USER_SIGNIN_ASYNC,
  payload,
});
