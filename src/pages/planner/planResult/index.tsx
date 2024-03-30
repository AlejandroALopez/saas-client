import React from 'react';
import { useAppSelector } from "../../../utils/hooks";
import Header from '../../../components/header';
import './style.css';

function PlanResult() {
  const goal: string = useAppSelector(state => state.plan.goal);
  const numWeeks: number = useAppSelector(state => state.plan.numWeeks);
  const weeksArray: null[] = new Array(numWeeks).fill(null);

  return (
    <div>
      <Header />
      <div className="Result-Screen">
        <p className="goal-text">Goal: <span>{goal}</span></p>
        <p className="weeks-text">Plan of <span>{numWeeks} weeks</span></p>
        <div className="weeks-container">
          {weeksArray.map((_: null, index: number) => (
            <div key={index} className="week-item">
              <p>Week {index + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlanResult;
