import React from "react";
import "./App.css";

const HomeButtons = (props) => {
  return (
    <div className="homeButtons">
    {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
      <button className="homeButtons__touchdown" 
        onClick={() => props.buttonHandler('Lions', + 7)}>
        Home Touchdown
      </button>
      <button className="homeButtons__fieldGoal"
        onClick={() => props.buttonHandler('Lions', + 3)}>
        Home Field Goal
      </button>
    </div>
  );
};

export default HomeButtons;