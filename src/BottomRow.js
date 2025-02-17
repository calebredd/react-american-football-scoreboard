import React from "react";
import "./App.css";

export default class BottomRow extends React.Component {
  render() {
    return (
      <div className="bottomRow">
        <div className="down">
          <h3 className="down__title">Down</h3>
          <div className="down__value">{this.props.down}</div>
        </div>
        <div className="toGo">
          <h3 className="toGo__title">To Go</h3>
          <div className="toGo__value">{this.props.toGo}</div>
        </div>
        <div className="ballOn">
          <h3 className="ballOn__title">Ball on</h3>
          <div className="ballOn__value">21</div>
        </div>
        <div className="quarter">
          <h3 className="quarter__title">Quarter</h3>
          <div className="quarter__value">{this.props.quarter}</div>
        </div>
      </div>
    );
  }
}
