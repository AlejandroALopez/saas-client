import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "../../../utils/hooks";
import { updateWeeks, updatePlan } from "../../../redux/actions/planActions";
import { testPlan1 } from '../../../utils/testData';

import Header from '../../../components/header';
import './style.css';

function SetWeeks() {
  const dispatch = useAppDispatch();
  const goal = useAppSelector(state => state.goal.goal);

  const question = "In how many weeks do you wish to complete it?";
  const options = [2, 4, 6]; // suggested number of weeks

  const [selectedTime, setSelectedTime] = useState<number>(0);

  const submitTime = () => {
    dispatch(updateWeeks(selectedTime));
    dispatch(updatePlan(testPlan1));  // TEST: Replace this with an API call
  }

  // TODO: Goal --> add edit button (icon) next to it, to go back to goal page

  return (
    <div>
      <Header />
      <div className="Weeks-Screen">
        <p className="goal">Goal: <span>{goal}</span></p>
        <p className="weeks-title">{question}</p>
        <div className="options-container">
          {options.map((opt: number) => {
            return (
              <button key={opt} className={`option ${selectedTime === opt && "selected"}`} onClick={() => setSelectedTime(opt)}>
                <p>{opt}</p>
              </button>
            )
          })}
        </div>
        <div className="submit-button-container">
          <Link to="/plan/result">
            <button
              className={`submit-button ${selectedTime === 0 && "disabled"}`}
              disabled={selectedTime === 0}
              onClick={() => submitTime()}
            >
              &gt;
            </button>
          </Link>
        </div>
      </div>
    </div>

  );
}

export default SetWeeks;
