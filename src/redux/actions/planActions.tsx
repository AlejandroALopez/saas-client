import { UPDATE_GOAL, UPDATE_WEEKS, UPDATE_PLAN } from "./planActionTypes";
import { Plan } from "../../types/planTypes";

export const updateGoal = (goal: string) => {
    return {
        type: UPDATE_GOAL,
        payload: goal,
    };
};

export const updateWeeks = (weeks: number) => {
    return {
        type: UPDATE_WEEKS,
        payload: weeks,
    };
};

export const updatePlan = (plan: Plan) => {
    return {
        type: UPDATE_PLAN,
        payload: plan,
    };
};