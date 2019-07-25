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
          down={this.props.down}
          toGo={this.props.toGo}
        />
        <Buttons
          homeScore={this.props.homeScore}
          setHomeScore={this.props.setHomeScore}
          awayScore={this.props.awayScore}
          setAwayScore={this.props.setAwayScore}
        />
        <section className="buttons">
          <button
            className="down"
            onClick={() => {
              if (this.props.down < 4) {
                this.props.setDown(this.props.down + 1);
              } else this.props.setDown(1);
            }}
          >
            Down
          </button>
          <button
            className="reset"
            onClick={() => {
              this.props.setHomeScore(0);
              this.props.setAwayScore(0);
              this.props.setQuarter(0);
              this.props.setDown(1);
              this.props.setToGo(10);
              return;
            }}
          >
            Reset
          </button>
          <button
            className="quarter"
            onClick={() => {
              if (this.props.quarter < 4) {
                this.props.setQuarter(this.props.quarter + 1);
              } else this.props.setQuarter(0);
            }}
          >
            Quarter
          </button>
        </section>
      </section>
    );
  }
}
