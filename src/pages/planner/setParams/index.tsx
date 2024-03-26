import React from 'react';
import { useAppDispatch, useAppSelector} from "../../../utils/hooks";
import Header from '../../../components/header';
import './style.css';

function SetParams() {
  const dispatch = useAppDispatch();
  const goal = useAppSelector(state => state.goal.goal);

  return (
    <div>
      <Header />
      <div className="Params-Screen">
        <p>Goal in redux: {goal}</p>
      </div>
    </div>

  );
}

export default SetParams;
