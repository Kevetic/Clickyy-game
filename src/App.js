import React, {Component} from 'react';

import GameContainer from './components/game-container';
import Header from './components/header';
import Score from './components/score';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // game data
    this.state = {
      chosen: [],
      score: 0,
      top_score: 0
    }
  }

  updateGame = id => {
    if (this.state.chosen.includes(id)) {
      this.setState({
        score: 0,
        chosen: []
      });
    } else {
      let newScore = this.state.score + 1;
      this.setState({
        score: newScore
      });

      if (newScore > this.state.top_score) {
        this.setState({
          top_score: newScore
        });
      }

      let newChosen = [...this.state.chosen];
      newChosen.push(id);
  
      this.setState({
        chosen: newChosen
      });
    }

    console.log(this.state.chosen);

  }

  render() {
    return (
      <div>
        <Header/>
        <Score
          score={this.state.score}
          topScore={this.state.top_score}
        />
        <GameContainer
          updateGame={this.updateGame}
        />
      </div>
    )
  }
}

export default App;
