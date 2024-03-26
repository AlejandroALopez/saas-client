import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/header';
import './style.css';

function SetGoal() {

  const placeholder_text = "Run 5 miles/day, eat healthier, etc.";
  const ideas = ["Run 5 miles/day", "Learn Python", "Analyze a scientific paper", "Plan a date",
    "Lose 10 pounds", "Get better sleep"];

  const [goal, setGoal] = useState("");

  const submitGoal = () => {
    console.log("Goal chosen: ", goal);
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
            value={goal}
            onChange={e => setGoal(e.target.value)}
          />
          <Link to="/plan/params">
            <button
              className={`submit-button ${goal === "" && "disabled"}`}
              disabled={goal === ""}
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
              <button className="idea" key={index} onClick={() => setGoal(idea)}>
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
