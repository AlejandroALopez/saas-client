import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";

const store = configureStore({ reducer: rootReducer });

export default store;

// Code snippet obtained from: https://redux-toolkit.js.org/tutorials/typescript#define-typed-hooks

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: { goal: GoalState }
export type AppDispatch = typeof store.dispatch