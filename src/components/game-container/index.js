import React, {Component} from 'react';
import GameImages from "../game-images";
import people from "../../people";

import './style.css';

class GameContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: people
    }
  }

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while(0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  selectPerson = id => {
    this.setState({
      people: this.shuffle(people)
    });
    
    this.props.updateGame(id);
  }

  render() {

    return (
      <div className="game-container">
        {this.state.people.map(person => (
          <GameImages
            selectPerson={this.selectPerson}
            key={person.id}
            id={person.id}
            image={person.image}
            name={person.name}
          />
        ))}
      </div>
    );
  }
}


export default GameContainer;