import React, { Component } from 'react';
import Player from './Components/Player';
import Button from './Components/Button';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.weapons = ["rock", "paper", "scissors"];
    this.weaponUsed = Math.floor(Math.random() * 3);
    this.runGame = this.runGame.bind(this);
  }

  generateRandomElements(e) {
    this.weapons = ["rock", "paper", "scissors"];
    this.weaponUsed = Math.floor(Math.random() * 3);
    console.log(this.weapons[this.weaponUsed]);
  }

  runGame(){    
    this.setState({
      playerWeapon1 :  this.generateRandomElements(),
      playerWeapon2 :  this.generateRandomElements(),
    })
  }

  render() {
    return (
      <div className="App">
        <Player className="App__player" playerWeapon1="paper" />
        <Player className="App__player" playerWeapon2="rock" />
        <button className="App__button"  onClick={this.runGame}>Play </button>
      </div>
    );
  }
}

