import React, { useState } from 'react';
import { useAppSelector } from "../../../utils/hooks";
import Header from "../../../components/header";
import { ReactComponent as ExpandDown } from "../../../assets/arrows/expandDown.svg";
import { ReactComponent as ExpandUp } from "../../../assets/arrows/expandUp.svg";
import { ReactComponent as BulletPoint } from "../../../assets/shapes/bulletPoint.svg";
import { testWeeks } from "../../../utils/testData";
import './style.css';

function PlanResult() {
  const goal: string = useAppSelector(state => state.plan.goal);
  const numWeeks: number = useAppSelector(state => state.plan.numWeeks);
  const weeksArray: null[] = new Array(numWeeks).fill(null);

  const [week, setWeek] = useState<number>(0);

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
              <div>
                <div key={index} className="week-item">
                  <p>Week {index + 1}</p>
                  <button
                    className="expand-button"
                    onClick={() => (index + 1 === week) ? setWeek(0) : setWeek(index + 1)}
                  >
                    {week === index + 1 ? <ExpandUp className="week-arrow" /> : <ExpandDown className="week-arrow" />}
                  </button>
                </div>
                {(index + 1 === week) && (
                  <div className="week-tasks-container">
                    {testWeeks[`Week ${index + 1}`].map((task: string, index: number) => (
                      <div key={index * 100} className="task-container">
                        <BulletPoint />
                        <div className="task">
                          <p>{task}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
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
