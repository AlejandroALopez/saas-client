import React, { useState } from 'react';
import { useAppSelector } from "../../../utils/hooks";
import { WeekProps, TaskProps } from '../../../types/plannerProps';
import Header from "../../../components/header";

import { ReactComponent as ExpandDown } from "../../../assets/arrows/expandDown.svg";
import { ReactComponent as ExpandUp } from "../../../assets/arrows/expandUp.svg";
import { ReactComponent as BulletPoint } from "../../../assets/shapes/bulletPoint.svg";
import { testWeeks } from "../../../utils/testData";
import './style.css';

const Week: React.FC<WeekProps> = ({ week, activeWeek, setActiveWeek }) => {
  return (
    <div>
      <div key={week} className="week-item">
        <p>Week {week}</p>
        <button
          className="expand-button"
          onClick={() => (week === activeWeek) ? setActiveWeek(0) : setActiveWeek(week)}
        >
          {activeWeek === week ? <ExpandUp className="week-arrow" /> : <ExpandDown className="week-arrow" />}
        </button>
      </div>
      {(week === activeWeek) && (
        <div className="week-tasks-container">
          {testWeeks[`Week ${week}`].map((task: string, index: number) => (
            <Task key={index*100} title={task} />
          ))}
        </div>
      )}
    </div>
  )
}

const Task: React.FC<TaskProps> = ({ key, title }) => {
  return (
    <div key={key} className="task-container">
      <BulletPoint />
      <div className="task">
        <p>{title}</p>
      </div>
    </div>
  );
}

function PlanResult() {
  const goal: string = useAppSelector(state => state.plan.goal);
  const numWeeks: number = useAppSelector(state => state.plan.numWeeks);
  const weeksArray: null[] = new Array(numWeeks).fill(null);

  const [activeWeek, setActiveWeek] = useState<number>(0);

  return (
    <div>
      <Header />
      <div className="Result-Screen">
        <div className="top-container">
          <p className="subtitle-text">Plan</p>
          <p className="goal-text">{goal}</p>
          <p className="weeks-text">{numWeeks} weeks</p>
        </div>
        <div className="rows-container">
          <div className="weeks-container">
            {weeksArray.map((_: null, index: number) => (
              <Week week={index + 1} activeWeek={activeWeek} setActiveWeek={setActiveWeek} />
            ))}
          </div>
          <div className="demo-container">
            <div className="placeholder" />
            <div className="buttons-container">
              <button className="start-plan-button">Start Plan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanResult;
