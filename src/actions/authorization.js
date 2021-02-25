import { USER_LOGGEDIN, LOGOUT } from "../constants/authorization-constants";
export const loggedinAction = ({ is_loggedin, loggedin_as, user_info }) => {
	return {
		type: USER_LOGGEDIN,
		payload: { is_loggedin, loggedin_as, user_info },
	};
};
export const userLogout = () => {
	return {
		type: LOGOUT,
		payload: {},
	};
};
