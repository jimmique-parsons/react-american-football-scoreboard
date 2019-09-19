import React from "react";
import "./App.css";

const AwayButtons = (props) => {
  return (
    <div className="awayButtons">
      <button className="awayButtons__touchdown"
        onClick={() => props.buttonHandler('Tigers', 7)}>
        Away Touchdown
      </button>
      <button className="awayButtons__fieldGoal"
        onClick={() => props.buttonHandler('Tigers', 3)}>
        Away Field Goal
      </button>
    </div>
  );
};

export default AwayButtons;