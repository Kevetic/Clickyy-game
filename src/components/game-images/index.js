import React, {Component} from 'react';
import './style.css';

function GameImages(props) {
  return (
    <div className="card" onClick={() => props.selectPerson(props.id)}>
      <div className="img-container">
        <img className="game-image"src={props.image} alt={props.name}/>
      </div>
    </div>
  );
}


export default GameImages;