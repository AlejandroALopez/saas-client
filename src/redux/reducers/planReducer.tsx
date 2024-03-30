import { UPDATE_PLAN } from "../actions/planActionTypes";

const initialState = {
    goal: "",
    numWeeks: 0,
    tasks: [],
};

const planReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_PLAN:
            return {
                ...state,
                goal: action.payload.goal,
                numWeeks: action.payload.numWeeks,
                tasks: action.payload.tasks,
            };
        default:
            return state;
    }
};

export default planReducer;