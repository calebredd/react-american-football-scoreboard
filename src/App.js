//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import Scoreboard from "./Scoreboard";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [quarter, setQuarter] = useState(0);
  const [down, setDown] = useState(1);
  const [toGo, setToGo] = useState(10);


  return (
    <div className="container">
      <Scoreboard
        homeScore={homeScore}
        setHomeScore={setHomeScore}
        awayScore={awayScore}
        setAwayScore={setAwayScore}
        setQuarter={setQuarter}
        quarter={quarter}
        setDown={setDown}
        down={down}
        setToGo={setToGo}
        toGo={toGo}
      />
    </div>
  );
}

export default App;
