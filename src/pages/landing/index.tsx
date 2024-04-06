import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import './style.scss';

function Landing() {

  const app_name = "APP";

  return (
    <div>
      <Header />
      <div className="Landing">
        <div className="presentation-section-container">
          <div className="presentation-info-container">
            <p>
              Want to make a detailed plan to reach your goal?
              Make one in seconds with <span>{app_name}</span>!
            </p>
            <p><span>{app_name}</span> uses AI to build the perfect plan for you!</p>
            <div className="button-container">
              <Link to="/plan/goal">
                <button className="start-button">Get Started</button>
              </Link>
            </div>
          </div>
          <div className="presentation-image" />
        </div>
        <div className="features-section-container">
          <div className="features-title-container">
            <p>What {app_name} offers</p>
          </div>
          <div className="features-container">
            <div className="feature-item">
              <div className="feature-image" />
              <p className="feature-text">Build a plan fast by answering a few questions</p>
            </div>
            <div className="feature-item">
              <div className="feature-image" />
              <p className="feature-text">Get a plan organized in weekly sprints that keeps track of completed steps</p>
            </div>
            <div className="feature-item">
              <div className="feature-image" />
              <p className="feature-text">Edit any part of the plan at any time to fit your schedule</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
