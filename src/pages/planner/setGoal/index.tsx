import React, { useState } from 'react';
import { useAppDispatch, useAppSelector} from "../../../utils/hooks";
import { updateGoal } from "../../../redux/actions/planActions";

import { Link } from 'react-router-dom';
import Header from '../../../components/header';
import './style.css';

function SetGoal() {
  const dispatch = useAppDispatch();
  const goal = useAppSelector(state => state.goal.goal);

  const placeholder_text = "Run 5 miles/day, eat healthier, etc.";
  const ideas = ["Run 5 miles/day", "Learn Python", "Analyze a scientific paper", "Plan a date",
    "Lose 10 pounds", "Get better sleep"];

  const [selectedGoal, setSelectedGoal] = useState<string>(goal || "");

  const submitGoal = () => {
    console.log("Goal chosen: ", selectedGoal);
    dispatch(updateGoal(selectedGoal));
  }

  return (
    <div>
      <Header />
      <div className="Goal-Screen">
        <p className="title">What is your goal?</p>
        <div className="goal-input-container">
          <input
            className="input-container"
            placeholder={placeholder_text}
            value={selectedGoal}
            onChange={e => setSelectedGoal(e.target.value)}
          />
          <Link to="/plan/params">
            <button
              className={`submit-button ${selectedGoal === "" && "disabled"}`}
              disabled={selectedGoal === ""}
              onClick={() => submitGoal()}
            >
              &gt;
            </button>
          </Link>
        </div>
        <p className="subtitle">Goal ideas</p>
        <div className="ideas-container">
          {ideas.map((idea, index) => {
            return (
              <button className="idea" key={index} onClick={() => setSelectedGoal(idea)}>
                <p className="idea-text">{idea}</p>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default SetGoal;
