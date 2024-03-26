import { combineReducers } from "redux";
import goalReducer from "./goalReducer";

const rootReducer = combineReducers({ goal: goalReducer });

export default rootReducer