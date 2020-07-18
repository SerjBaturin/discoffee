import { GET_USERS } from "./types";
export const getUsersList = (payload) => ({ type: GET_USERS, users: payload });
