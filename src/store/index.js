import { createStore } from "redux";
import { mainReducer } from "../reducer/index";
const store = createStore(mainReducer);
export default store;
