import { UPDATE_GOAL, UPDATE_PARAMS } from "./planActionTypes";

export const updateGoal = (goal: string) => {
    return {
        type: UPDATE_GOAL,
        payload: goal,
    };
};

// TODO: Create an interface for params (e.g. numWeeks, difficulty, hours/day, etc.)
export const updateParams = (params: any) => {
    return {
        type: UPDATE_PARAMS,
        payload: params,
    };
};