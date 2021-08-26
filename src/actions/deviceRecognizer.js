import { DEVICE_TYPE } from "../constants/authorization-constants";
export const deviceRecognizer = ({ is_mobile }) => {
		let device_type= is_mobile?'mobile':'desktop'
	return {
		type: DEVICE_TYPE,
		payload: { device_type:device_type },
	};
};