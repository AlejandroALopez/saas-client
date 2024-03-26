import { UPDATE_GOAL, UPDATE_PARAMS } from "../actions/planActionTypes";

const initialState = {
    goal: "",
    params: {
        numWeeks: 0
    },
};

const goalReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_GOAL:
            return {
                ...state,
                goal: action.payload,
            };
        case UPDATE_PARAMS:
            return {
                ...state,
                params: action.payload,
            }
        default:
            return state;
    }
};

export default goalReducer;
