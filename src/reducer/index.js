import { combineReducers } from "redux";
import authorization from "./authorization";
export const mainReducer = combineReducers({
	authorization,
});
export default mainReducer;
