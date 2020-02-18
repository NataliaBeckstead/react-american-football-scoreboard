//TODO: STEP 1 - Import the useState hook.
import React, { useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const[homeScore, setHomeScore] = useState(0);
  const[awayScore, setAwayScore] = useState(0);
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{ time }</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = { () => setHomeScore(homeScore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = { () => setHomeScore(homeScore + 3)}>Home Field Goal</button>
        </div>
        <button className="button homeButtons__touchdown" id = "start" onClick = { () => timer()}>Start</button>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = { () => setAwayScore(awayScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = { () => setAwayScore(awayScore + 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}


function timer() {  
  interval = setInterval(function() {
    
    const startButton = document.getElementById('start');

    //disable start button
    startButton.disabled = true;
    startButton.style.cursor = "not-allowed";

    //printing time on screen
    let intString = Array.from(miliseconds.toString());
    if (intString.length < 2) {
      time = "00:0" + miliseconds.toString();
    } else if (intString.length < 3) {
      time = "00:" + miliseconds.toString();
    } else if (intString.length < 4) {
      time = "0" + intString[0] + ":" + intString[1] + intString[2];
    } else if (intString.length < 5) {
      time = intString[0] + intString[1] + ":" + intString[2] + intString[3];
    }
       
    miliseconds--;
    console.log(miliseconds);

    //stop timer
    if(miliseconds === -1){
      clearInterval(interval);
      startButton.disabled = false;
      startButton.style.cursor = "pointer";
      miliseconds = 500;
    }
  }, 10)
}

//variables
var miliseconds = 500;
var interval;
let time = "05:00";

export default App;

