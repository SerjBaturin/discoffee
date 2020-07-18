import { CHECK_USER_ASYNC } from "./types";
export const checkUserAsync = (payload) => ({
  type: CHECK_USER_ASYNC,
  payload,
});
