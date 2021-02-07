import { SET_USER_INFO, LOGOUT } from "../constants/authentication";

export const setLoggedinUserInfo = ({ is_loggedin, user_info }) => {
  return {
    type: SET_USER_INFO,
    payload: { is_loggedin, user_info }
  };
};
export const userLogout = () => {
  return {
    type: LOGOUT,
    payload: {}
  };
};
