import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

// import App from './App';
import SetGoal from './pages/planner/setGoal';
import SetParams from './pages/planner/setParams';
import PlanResult from './pages/planner/planResult';
import Landing from './pages/landing';

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
    path: "/plan/params",
    element: <SetParams />
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
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
