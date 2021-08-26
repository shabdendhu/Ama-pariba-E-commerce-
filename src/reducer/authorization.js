import {
  USER_LOGGEDIN,
  DEVICE_TYPE,
} from "../constants/authorization-constants";
import { user_info, loggedin_as } from "../constants/storage-keys";

const Initialstate = {
  is_loggedin: localStorage.getItem(user_info) !== null ? true : false,
  loggedin_as: localStorage.getItem(loggedin_as),
  user_info:
    localStorage.getItem(user_info) !== null
      ? JSON.parse(localStorage.getItem(user_info))
      : null,
 
};
const authorization = (state = Initialstate, action) => {
  switch (action.type) {
    case USER_LOGGEDIN:
      state = {
        ...state,
        is_loggedin: action.payload.is_loggedin,
        loggedin_as: action.payload.loggedin_as,
        user_info: action.payload.user_info,
      };
    case DEVICE_TYPE:
      state = {
        ...state,
        device_type:action.payload.device_type,
      };
      break;
    default:
      state = { ...state };
  }
  return state;
};
export default authorization;
