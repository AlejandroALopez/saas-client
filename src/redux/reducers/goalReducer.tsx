import { UPDATE_GOAL, UPDATE_WEEKS } from "../actions/planActionTypes";

const initialState = {
    goal: "",
    numWeeks: 0,
};

const goalReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_GOAL:
            return {
                ...state,
                goal: action.payload,
            };
        case UPDATE_WEEKS:
            return {
                ...state,
                numWeeks: action.payload,
            }
        default:
            return state;
    }
};

export default goalReducer;
