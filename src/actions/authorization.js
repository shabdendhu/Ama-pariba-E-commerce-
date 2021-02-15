import { USER_LOGGEDIN } from "../constants/authorization-constants";
export const loggedinAction = ({ is_loggedin, loggedin_as, user_info }) => {
	return {
		type: USER_LOGGEDIN,
		payload: { is_loggedin, loggedin_as, user_info },
	};
};
