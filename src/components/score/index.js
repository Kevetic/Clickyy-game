import React, { Component } from 'react';

class Score extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <div className="score-counter">
        <h2>Score: {this.props.score}</h2>
        <h2>Top Score: {this.props.topScore}</h2>
      </div>
    );
  }
}

export default Score;