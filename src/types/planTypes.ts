export interface Task {
    title: string,
    description: string,
    week: number,
}

export interface Plan {
    goal: string,
    numWeeks: number,
    tasks: Task[], // ordered by week using a function
}