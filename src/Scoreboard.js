import React from "react";
import BottomRow from "./BottomRow";
import TopRow from "./TopRow";
import Buttons from "./Buttons";
import "./App.css";

export default class Scoreboard extends React.Component {
  render() {
    return (
      <section className="scoreboard">
        <TopRow
          homeScore={this.props.homeScore}
          awayScore={this.props.awayScore}
        />{" "}
        <BottomRow
        quarter={this.props.quarter}
        />
        <Buttons
          homeScore={this.props.homeScore}
          setHomeScore={this.props.setHomeScore}
          awayScore={this.props.awayScore}
          setAwayScore={this.props.setAwayScore}
        />
        <section className="buttons">
          <button
            className="reset"
            onClick={() => {
              this.props.setHomeScore(0);
              this.props.setAwayScore(0);
              this.props.setQuarter(0);
              return;
            }}
          >
            Reset
          </button>
          <button
            className="quarter"
            onClick={() => this.props.setQuarter(this.props.quarter + 1)}
          >
            Quarter
          </button>
        </section>
      </section>
    );
  }
}
