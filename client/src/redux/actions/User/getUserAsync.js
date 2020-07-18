import { GET_USER_ASYNC } from "./types";
export const getUserAsync = (payload) => ({
  type: GET_USER_ASYNC,
  payload,
});
