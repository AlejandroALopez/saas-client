import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import store from "./redux/store";

// import App from './App';
import SetGoal from './pages/planner/setGoal';
import SetWeeks from './pages/planner/setWeeks';
import PlanResult from './pages/planner/planResult';
import Landing from './pages/landing';

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/plan/goal",
    element: <SetGoal />
  },
  {
    path: "/plan/weeks",
    element: <SetWeeks />
  },
  {
    path: "/plan/result",
    element: <PlanResult />
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
