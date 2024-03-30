import { combineReducers } from "redux";
import goalReducer from "./goalReducer";
import planReducer from "./planReducer";

const rootReducer = combineReducers({
    goal: goalReducer,
    plan: planReducer
});

export default rootReducer